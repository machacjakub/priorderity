interface IProps {
    activities: { id: number, text: string }[];
}

export const Activities = ( {activities}: IProps ) => (
	<div>
		{activities.map( ( item ) => {
			return <p key={item.id}>{item.text}</p>;
		} )}
	</div>
);