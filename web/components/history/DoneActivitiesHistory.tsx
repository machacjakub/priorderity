import {IDoneActivity} from "@/web/types";
import {sortByDate} from "@/web/utils";
import {ActivitiesInHistoryList} from "@/web/components/history/ActivitiesInHistoryList";
import styled from "styled-components";

const DayWrapper = styled.div`
  background-color: lightgray;
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
`;

interface IProps {
    recommended: IDoneActivity[];
}

const isSameDay = ( a: Date, b: Date ) => new Date( a ).getDate() === new Date( b ).getDate() && new Date( a ).getMonth() === new Date( b ).getMonth() && new Date( a ).getFullYear() === new Date( b ).getFullYear();

export const DoneActivitiesHistory = ( {recommended}: IProps ) => {
	const activities = recommended.sort( ( itemA, itemB ) => sortByDate( itemA.created_at, itemB.created_at ) );
	const now = new Date().getTime();
	const dummyArray = Array( 7 ).fill( null );
	const days = dummyArray.map( ( day, i ) => {
		const thisDay = new Date( now - 86400000 * i );
		return {
			title: `${thisDay.getDate()}.${thisDay.getMonth() + 1}.`,
			activities: activities.filter( ( activity ) => isSameDay( activity.created_at, thisDay ) )
		};
	} );
	return (
		<div>
			<ul> {days.map( ( day, i ) => {
				return ( <DayWrapper key={i}>
					{day.title}
					<ActivitiesInHistoryList activities={day.activities}/>
				</DayWrapper> );
			} )} </ul>
			{/*<ul> {activities.map( ( item, i ) => {*/}
			{/*	if ( i < 19 ) {*/}
			{/*		return ( <div>*/}
			{/*			{now}*/}
			{/*			<ActivityInHistory key={item.id} item={item}/>*/}
			{/*		</div> );*/}
			{/*	}*/}
			{/*	return null;*/}
			{/*} )} </ul>*/}
		</div> );
}
;