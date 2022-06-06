import { Header } from 'components/header';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
 display: flex;
 flex-direction: column;
 flex: 1;
 margin: 20px;
`;

interface MainLayoutProps {
 children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
 return (
  <>
   <Header />
   <Container>{children}</Container>
  </>
 );
};
