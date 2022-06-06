import { useCallback, useState } from 'react';
import useAxios from 'axios-hooks';
import { Card } from 'components/shared/card';
import { SearchInput } from 'components/shared/searchInput';
import { API } from 'enums/api';
import styled from 'styled-components';
import { CoinDetails } from 'components/shared/coinDetails';
import { Rate } from 'components/shared/rate';
import { Price } from 'components/shared/price';
import { FavoriteButton } from 'components/shared/favoriteButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'route';
import { useFavorites } from 'hooks/useFavorites';
import ChevronDown from 'assets/icons/chevron-down.svg';

const Header = styled.div`
 display: flex;
 justify-content: space-between;
`;

const Table = styled.table`
 width: 100%;
 border-collapse: collapse;
 border-spacing: 0;
 font-size: 14px;
 background-color: #ffffff;
 cursor: pointer;
 & th {
  background-color: #0e80d5;
  color: #fff;
  padding: 15px;
  text-align: left;
 }
 & td {
  padding: 10px;
 }
`;

const defaultParams = {
 vs_currency: 'eur',
 order: 'market_cap_desc',
 per_page: 50,
 page: 1,
};

const columns = [
 {
  key: 'name',
  label: 'Name',
  sortable: true,
 },
 {
  key: 'price_change_percentage_24h',
  label: '24h %',
  sortable: true,
 },
 {
  key: 'current_price',
  label: 'Price',
  sortable: true,
 },
 {
  key: 'favorite',
  label: 'Favorite',
  sortable: false,
 },
];

export const CryptoPrices = () => {
 const { handleChange, isFavoriteById } = useFavorites();
 const navigate = useNavigate();
 const [{ data, loading, error }, refetch] = useAxios({
  url: API.COINMARKETS,
  method: 'GET',
  params: defaultParams,
 });

 const [search, setSearch] = useState('');
 /*
  * Better pratice would be to have OrderBy as DESC and ASC and sortBy the actual value
  */
 const [orderBy, setOrderBy] = useState(defaultParams.order);

 const handleSearch = useCallback(
  (value: string) => {
   setSearch(value);
   /*
    * API support server side pagination, but doesn't support search
    * Missing debounce function
    */
   refetch({ params: { ...defaultParams, search: value } });
  },
  [setSearch, refetch]
 );

 const handleOrderBy = useCallback(
  (value: string) => {
   setOrderBy(value);
   refetch({ params: { ...defaultParams, order: value } });
  },
  [setOrderBy, refetch]
 );

 if (data === null || error) return <p>Error</p>;

 return (
  <Card>
   <Header>
    <h3>Cryptocurrency Prices</h3>
    <SearchInput value={search} onChange={handleSearch} />
   </Header>
   <Table>
    <thead>
     <tr>
      {columns.map((column) => (
       <th onClick={() => column.sortable && handleOrderBy(column.key)}>
        {column.label} {orderBy === column.key && <img src={ChevronDown} alt='chevron-down' />}
       </th>
      ))}
     </tr>
    </thead>
    <tbody>
     {loading && <p>Loading...</p>}
     {!loading &&
      data.map((coin: any) => (
       <tr onClick={() => navigate(ROUTES.DETAILS.replace(':id', coin.id))}>
        <td>
         <CoinDetails name={coin.name} symbol={coin.symbol} image={coin.image} />
        </td>
        <td>
         <Rate value={coin.price_change_percentage_24h} />
        </td>
        <td>
         <Price price={coin.current_price} />
        </td>
        <td>
         <FavoriteButton checked={isFavoriteById(coin.id)} onChange={(checked) => handleChange(checked, coin)} />
        </td>
       </tr>
      ))}
    </tbody>
   </Table>
  </Card>
 );
};
