import {Bar} from "./Bar";
import {FlexWrapper} from "./utils_components/wrappers";
import {IActivityAttributes, IDoneActivity} from "@/web/types";
import {activities} from "@/web/activities";

interface IHealthStats {
    mental: number,
    physical: number,
    career: number,
    social: number,
    realization: number
}

const getSingleStatPoints = ( rules: { points: number, duration: number } | null, hours: number ) => {
	if ( !rules ) return 0;
	const points = rules.duration >= hours ? rules.points : rules.points + rules.duration - hours;
	return points >= 0 ? points : 0;
};

const getStatsPoints = ( rules: IActivityAttributes, hours: number ) => {
	return {
		mental: getSingleStatPoints( rules.mental, hours ),
		physical: getSingleStatPoints( rules.physical, hours ),
		career: getSingleStatPoints( rules.career, hours ),
		realization: getSingleStatPoints( rules.realization, hours ),
		social: getSingleStatPoints( rules.social, hours ),
	};
};

const getCurrentStats = ( activity: IDoneActivity, activitiesRules: IActivityAttributes[] ): IHealthStats => {
	const lengthInHours = Math.floor( ( new Date().getTime() - new Date( activity.created_at ).getTime() ) / 3600000 );
	const thisActivityRules: IActivityAttributes = activitiesRules.filter( ( currentActivity ) => currentActivity.type === activity.type )[0];
	return getStatsPoints( thisActivityRules, lengthInHours );
};

const sumSameObjectProperties = ( obj1: IHealthStats, obj2: IHealthStats ): IHealthStats => {
	return {
		mental: obj1.mental + obj2.mental,
		physical: obj1.physical + obj2.physical,
		career: obj1.career + obj2.career,
		social: obj1.social + obj2.social,
		realization: obj1.realization + obj2.realization,
	};
};

export const HealthBars = ( {doneActivities}: { doneActivities: IDoneActivity[] } ) => {
	const healthStats: IHealthStats = doneActivities.reduce( ( acc, curr ) => {
		return sumSameObjectProperties( getCurrentStats( curr, activities ), acc );
	}, {mental: 0, physical: 0, career: 0, social: 0, realization: 0} );
	return (
		<div>
			<FlexWrapper>
				<Bar title={'Mental health'} percentage={healthStats.mental}/>
				<Bar title={'Physical health'} percentage={healthStats.physical}/>
			</FlexWrapper>
			<FlexWrapper>
				<Bar title={'Career'} percentage={healthStats.career}/>
				<Bar title={'Relationships'} percentage={healthStats.social}/>
				<Bar title={'Realization'} percentage={healthStats.realization}/>
			</FlexWrapper>
		</div>
	);
};