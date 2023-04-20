import {Activities} from "./Activities";
import {HealthBars} from "./HealthBars";
import styled from "styled-components";
import {ReccomendedActivitiesList} from "./ReccomendedActivitiesList";
import {useEffect, useState} from "react";
import {supabase} from "@/database/supabaseClient";
import {getDatabaseOperations} from "@/database/databaseOperation";
import {Nullable} from "fputils";
import {LoadingOutlined} from "@ant-design/icons";
import {IDoneActivity} from "@/web/types";
import {getNewItemsFromPayload} from "@/web/utils";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar heading"
    "sidebar content";
  height: 100vh;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  background-color: #f2f2f2;
  padding: 16px;
`;

const Heading = styled.div`
  grid-area: heading;
  background-color: #ffffff;
  padding: 16px;
`;

const Content = styled.div`
  grid-area: content;
  background-color: #ffffff;
  padding: 16px;
`;

const database = getDatabaseOperations();


export const AppContainer = () => {
	const [activities, setActivities] = useState<Nullable<IDoneActivity[]>>( [] );
	const [loading, setLoading] = useState( true );
	useEffect( () => {
		const fetchItems = async () => {
			console.log( 'fetching items' );
			const data = await database.getActivities();
			setActivities( data );
			setLoading( false );
		};
		fetchItems();

		supabase
			.channel( 'schema-db-changes' )
			.on(
				'postgres_changes',
				{
					event: '*',
					schema: 'public',
					table: 'priorderity-activities'
				},
				( payload: any ) => {
					if ( activities !== null ) {
						setActivities( getNewItemsFromPayload( activities, payload ) );
						fetchItems();
					}
				}
			)
			.subscribe();
	}, [] );

	if ( !activities || loading ) {
		return <div style={{height: '700px', textAlign: 'center'}}>
			<LoadingOutlined style={{fontSize: '30px', marginTop: '350px'}}/>
		</div>;
	}

	const addActivity = async ( type: string ) => {
		// pipe( await database.addActivity( type ), ( added ) => setActivities( [...activities, added[0]] ) );
		await database.addActivity( type );
	};

	return ( <>
		<Wrapper>
			<Sidebar>
				<ReccomendedActivitiesList recommended={activities}/>
			</Sidebar>
			<Heading>
				<HealthBars doneActivities={activities}/>
			</Heading>
			<Content>
				<Activities addActivity={addActivity}/>
			</Content>
		</Wrapper>
	</>
	);
};