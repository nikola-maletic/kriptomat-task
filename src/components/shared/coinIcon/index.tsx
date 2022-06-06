import { useEffect, useState } from 'react';

export interface CoinProps {
 symbol: string;
}

export const CoinIcon = ({ symbol }: CoinProps) => {
 const [cryptoIcon, setCryptoIcon] = useState<any>(null);

 useEffect(() => {
  import(`/node_modules/cryptocurrency-icons/svg/color/${symbol}.svg`).then((image) => setCryptoIcon(image.default));
 }, [symbol]);

 return (
  <>
   <img src={cryptoIcon} alt={symbol} height={40} width={40} />
  </>
 );
};
