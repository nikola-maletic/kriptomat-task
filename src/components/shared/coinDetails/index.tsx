import { CoinIcon } from 'components/shared/coinIcon';
import styled from 'styled-components';

const Container = styled.div<any>`
 display: flex;
 align-items: center;
 & .name {
  font-weight: 500;
  font-size: 18px;
  color: #2f314b;
  margin-left: 10px;
 }
 & .code {
  font-weight: 300;
  font-size: 18px;
  color: #2f314b;
  text-transform: uppercase;
  margin-left: 10px;
 }
 & .desciption {
  display: flex;
  flex-direction: ${(props: any) => props.direction || 'row'};
 }
`;

export interface CoinDetailsProps {
 name: string;
 symbol: string;
 image?: string;
 direction?: string;
}

export const CoinDetails = ({ name, symbol, direction, image }: CoinDetailsProps) => {
 return (
  <Container direction={direction}>
   {/* Later saw that there is image property in the API response... */}
   {image ? <img width={40} height={40} src={image} alt={name} /> : <CoinIcon symbol={symbol} />}
   <span className='desciption'>
    <span className='name'>{name}</span> <span className='code'>{symbol}</span>
   </span>
  </Container>
 );
};
