import styled from "styled-components";

interface IProps {
    type: string;
    addActivity: ( type: string ) => void;
}

const Card = styled.li`
  cursor: pointer;
  background-color: #EEE;
  border-radius: 10px;
  padding: 20px;
  min-width: 120px;

  &:hover {
    background-color: lavender;
    transition-duration: 700ms;

`;

export const Activity = ( {type, addActivity}: IProps ) => {
	return (
		<Card onClick={() => addActivity( type )}>
			{type}
		</Card>
	);
};