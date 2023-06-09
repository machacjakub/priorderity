import {Progress, Space, Typography} from "antd";
import styled from "styled-components";

interface IProps {
    title: string;
    percentage: number;
}

const getColor = ( percentage: number ) => {
	const red = 255 - ( percentage > 60 ? ( percentage - 60 ) * 4 : 0 );
	const green = 50 + ( percentage > 60 ? 170 : percentage * 2.8 );
	const blue = percentage < 60 ? 0 : ( percentage - 60 ) * 2;
	return `rgb(${red},${green},${blue})`;
};


const BarContainer = styled.div`
  text-align: center;
  background-color: #F3F3F3;
  padding: 20px;
  border-radius: 30px;
  flex-grow: 3;
  margin: 0 10px;
`;

export const Bar = ( {title, percentage}: IProps ) => {
	const realPercentage = percentage > 100 ? 100 : percentage;
	return (
		<BarContainer>
			<Space size={20}>
				<Progress size={120} type="circle" percent={percentage} strokeColor={getColor( realPercentage )}/>
			</Space>
			<Typography.Text
				style={{textAlign: 'center', display: 'block', marginTop: '20px'}}>{title}</Typography.Text>
		</BarContainer>
	);
};