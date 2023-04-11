import {Activities} from "./Activities";
import {HealthBars} from "./HealthBars";
import styled from "styled-components";
import {ReccomendedActivitiesList} from "./ReccomendedActivitiesList";

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

export const AppContainer = () => {
	const recommendedActivities = [{id: 1, text: 'sekan'}, {id: 2, text: 'Thodieungs'}];
	return ( <>
		<Wrapper>
			<Sidebar>
				<ReccomendedActivitiesList recommended={recommendedActivities}/>
			</Sidebar>
			<Heading>
				<HealthBars/>
			</Heading>
			<Content>
				<Activities activities={recommendedActivities}/>
			</Content>
		</Wrapper>
	</>
	);
};