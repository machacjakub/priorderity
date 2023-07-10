import styled from "styled-components";

const ListItem = styled.div`
  background-color: white;
  color: black;
  width: 200px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;

export const ActivityInHistory = ( {item}: any ) => {
	// TODO dodelat krizek a mazani
	return <ListItem>{item.type}</ListItem>;
};