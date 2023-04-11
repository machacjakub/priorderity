interface IProps {
    recommended: { id: number, text: string }[];
}

export const ReccomendedActivitiesList = ( {recommended}: IProps ) => {
	return ( <ul> {recommended.map( ( item ) => {
		return <li key={item.id}>{item.text}</li>;
	} )} </ul> );
};