import { Card } from 'components/shared/card';
import styled from 'styled-components';
import { useMainContext } from 'providers/main';
import { CoinDetails } from 'components/shared/coinDetails';
import { Rate } from 'components/shared/rate';
import { Price } from 'components/shared/price';
import EmptyState from 'assets/general-empty-state.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'route';

const List = styled.ul`
 list-style: none;
 padding: 0;
`;
const ListItem = styled.li`
 display: flex;
 justify-content: space-between;
 margin-bottom: 20px;
 cursor: pointer;
 & .right-side {
  text-align: right;
 }
`;

export const FavoriteList = () => {
 const { favorites } = useMainContext();
 const navigate = useNavigate();

 return (
  <Card>
   {favorites.length === 0 && (
    <>
     No favorites yet.
     <img src={EmptyState} alt='empty-state' />
    </>
   )}
   {favorites.length > 0 && (
    <List>
     {favorites.map((fav) => (
      <ListItem onClick={() => navigate(ROUTES.DETAILS.replace(':id', fav.id))}>
       <CoinDetails name={fav.name} symbol={fav.symbol} direction='column' image={fav.image} />
       <span className='right-side'>
        <Rate value={fav.price_change_percentage_24h} />
        <Price price={fav.current_price} />
       </span>
      </ListItem>
     ))}
    </List>
   )}
  </Card>
 );
};
