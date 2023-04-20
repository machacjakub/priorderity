import { IDoneActivity} from "@/web/types";

interface IProps {
    recommended: IDoneActivity[];
}

export const ReccomendedActivitiesList = ( {recommended}: IProps ) => {
	return ( <ul> {recommended.map( ( item ) => {
		return <li key={item.id}>{item.type}</li>;
	} )} </ul> );
};