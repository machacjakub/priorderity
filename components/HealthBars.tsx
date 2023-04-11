import {Bar} from "./Bar";
import {FlexWrapper} from "./utils_components/wrappers";

export const HealthBars = () => {
	return (
		<div>
			<FlexWrapper>
				<Bar title={'Mental health'} percentage={99}/>
				<Bar title={'Physical health'} percentage={70}/>
			</FlexWrapper>
			<FlexWrapper>
				<Bar title={'Career'} percentage={70}/>
				<Bar title={'Relationships'} percentage={70}/>
				<Bar title={'Realization'} percentage={70}/>
			</FlexWrapper>
		</div>
	);
};