import styled from 'styled-components';
import ChevronUp from 'assets/icons/chevron-up.svg';
import ChevronDown from 'assets/icons/chevron-down.svg';

const Container = styled.span`
 display: flex;
 align-items: center;
 font-size: 16px;
 color: ${(props) => props.color};
 & img {
  margin-right: 5px;
 }
`;

export interface RateProps {
 value: number;
}

export const Rate = ({ value }: RateProps) => {
 return (
  <Container color={value >= 0 ? '#0DEAA9' : '#FF9696'}>
   <img src={value >= 0 ? ChevronUp : ChevronDown} alt='chevron' /> {value.toFixed(2)}%
  </Container>
 );
};
