import useAxios from 'axios-hooks';
import { useFavorites } from 'hooks/useFavorites';
import styled from 'styled-components';
import { CoinIcon } from 'components/shared/coinIcon';
import { API } from 'enums/api';
import { FavoriteButton } from 'components/shared/favoriteButton';
import { Price } from 'components/shared/price';
import { Rate } from 'components/shared/rate';

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 margin-bottom: 20px;
 & .left-part {
  display: flex;
 }
 & .right-part {
  text-align: right;
 }
 & .description {
  margin-left: 10px;
 }
 & .bottom-desciption {
  display: flex;
 }
 & .bottom-desciption *:first-child {
  margin-right: 10px;
 }
 & .price-details:first-child {
  margin-right: 20px;
 }
`;

interface CoinPriceProp {
 id: string;
}

export const CoinPrice = ({ id }: CoinPriceProp) => {
 //  const [{ data: coinDetailsData, loading: coinDetailsLoading, error: coinDetailsError }] = useAxios({
 //   url: API.COIN.replace(':id', id),
 //   method: 'GET',
 //   params: {
 //    localization: false,
 //   },
 //  });
 const { handleChange, isFavoriteById } = useFavorites();
 const [{ data, loading, error }] = useAxios({
  url: API.COINMARKETS,
  method: 'GET',
  params: { vs_currency: 'eur', order: 'market_cap_desc', per_page: '5', page: 1, ids: id },
 });

 if (loading) return <div>Loading...</div>;

 if (error) return <div>Error!</div>;

 return (
  <Container>
   <div className='left-part'>
    {data[0].image ? <img width={40} height={40} src={data[0].image} alt={data[0].name} /> : <CoinIcon symbol={data[0].symbol} />}
    <span className='description'>
     <b>{data[0].name}</b>
     <span className='bottom-desciption'>
      <Rate value={data[0].price_change_percentage_24h} />
      <FavoriteButton checked={isFavoriteById(data[0].id)} onChange={(checked) => handleChange(checked, data[0])} />
     </span>
    </span>
   </div>
   <div className='right-part'>
    <Price price={data[0].current_price} bold fontSize='28px' />
    <div className='lowhigh-price'>
     <span className='price-details'>
      <span>24h Low: </span>
      <Price price={data[0].low_24h} bold />
     </span>
     <span className='price-details'>
      <span>24h High: </span>
      <Price price={data[0].high_24h} bold />
     </span>
    </div>
   </div>
  </Container>
 );
};
