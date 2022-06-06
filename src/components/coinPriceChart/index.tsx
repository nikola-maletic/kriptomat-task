import useAxios from 'axios-hooks';
import { API } from 'enums/api';
import { getUnixTime } from 'date-fns';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useMemo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
`;

const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const now = new Date(new Date().getTime());

interface CoinPriceChartProps {
 id: string;
}

export const CoinPriceChart = ({ id }: CoinPriceChartProps) => {
 const [{ data: priceHistoryData, loading: priceHistoryLoading, error: priceHistoryError }] = useAxios({
  url: API.COINRANGE.replace(':id', id),
  method: 'GET',
  params: {
   vs_currency: 'eur',
   from: getUnixTime(yesterday),
   to: getUnixTime(now),
  },
 });

 const parsedData = useMemo(() => priceHistoryData?.prices.map((item: any) => ({ timestamp: item[0], price: item[1] })), [priceHistoryData]);

 if (priceHistoryLoading) return <div>Loading...</div>;

 if (priceHistoryError) return <div>Error!</div>;

 return (
  <Container>
   <ResponsiveContainer width='100%' height='100%'>
    <LineChart width={700} height={400} data={parsedData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
     <CartesianGrid strokeDasharray='7' vertical={false}/>
     <Tooltip />
     <Line type='monotone' dataKey='price' stroke='#0E80D5' yAxisId={0} dot={false} strokeWidth={2} />
    </LineChart>
   </ResponsiveContainer>
  </Container>
 );
};
