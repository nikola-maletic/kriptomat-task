import { CryptoPrices } from 'components/coinPrices';
import { FavoriteList } from 'components/favoritesList';
import styled from 'styled-components';

const Container = styled.div`
 display: grid;
 grid-template-columns: 2fr 1fr;
 grid-gap: 20px;
`;

export default function Home() {
 return (
  <Container>
   <CryptoPrices />
   <FavoriteList />
  </Container>
 );
}
