import {IActivity} from "@/web/types";
import {ActivityInHistory} from "@/web/components/history/ActivityInHistory";

export const RecommendedActivities = ( {activities}: { activities: IActivity[] } ) => {
	return ( <div>
		{activities.map( activity => <ActivityInHistory key={activity.id} item={activity}/> )}
	</div> );
};