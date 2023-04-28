import {IDoneActivity} from "@/web/types";
import {ActivityInHistory} from "@/web/components/ActivityInHistory";
import {sortByDate} from "@/web/utils";

interface IProps {
    recommended: IDoneActivity[];
}

export const ReccomendedActivitiesList = ( {recommended}: IProps ) => {
	return ( <ul> {recommended.sort( ( itemA, itemB ) => sortByDate( itemA.created_at, itemB.created_at ) ).map( ( item, i ) => {
		if ( i < 18 ) {
			return <ActivityInHistory key={item.id} item={item}/>;
		}
		return null;
	} )} </ul> );
}
;