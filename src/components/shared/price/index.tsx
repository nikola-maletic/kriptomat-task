import styled from 'styled-components';

const Container = styled.span<any>`
 font-size: ${(props) => props.fontSize || '14px'};
 font-weight: ${(props) => props.bold ? '700' : '500'};
 color: #2f314b;
`;

export interface PriceProps {
 price: number;
 fontSize?: string;
 bold?: boolean;
}

export const Price = ({ price, fontSize, bold }: PriceProps) => {
 return (
  <Container fontSize={fontSize} bold={bold}>
   €{price.toFixed(2)}
  </Container>
 );
};
