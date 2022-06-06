import { FavoriteList } from 'components/favoritesList';
import { CoinPriceChart } from 'components/coinPriceChart';
import { Button } from 'components/shared/button';
import { Card } from 'components/shared/card';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from 'route';
import styled from 'styled-components';
import { CoinPrice } from 'components/coinPrice';

const Container = styled.div`
 display: grid;
 grid-template-columns: 2fr 1fr;
 grid-gap: 20px;
 height: 100%;
`;

const ChartContainer = styled(Card)`
 display: flex;
 flex-direction: column;
 & button {
  margin-top: 20px;
  align-self: center;
 }
`;

export default function Details() {
 let { id } = useParams();
 const navigate = useNavigate();

 if (!id) {
  navigate(ROUTES.HOME);
  return null;
 }

 return (
  <Container>
   <ChartContainer>
    <CoinPrice id={id} />
    <CoinPriceChart id={id as string} />
    <Button>Buy, Sell or Exchange Bitcoin</Button>
   </ChartContainer>
   <FavoriteList />
  </Container>
 );
}
