import {activities} from "@/web/activities";
import styled from "styled-components";
import {Activity} from "@/web/components/Activity";

interface IProps {
    addActivity: ( type: string ) => void;
}

const FlexList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 20px;
`;

export const Activities = ( {addActivity}: IProps ) => {
	return (
		<FlexList>
			{activities.map( ( item ) => {
				return <Activity key={item.type} type={item.type} addActivity={addActivity}/>;
			} )}
		</FlexList>
	);
}
;