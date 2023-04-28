import styled from "styled-components";

const ListItem = styled.div`
  background-color: white;
  width: 200px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;

export const ActivityInHistory = ( {item}: any ) => {
	return <ListItem>{item.type}</ListItem>;
};