import { Button } from 'components/shared/button';
import styled from 'styled-components';
import logo from 'assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'route';

const Layout = styled.div`
 display: flex;
 justify-content: space-between;
 background-color: #fbfbfb;
 padding: 20px;
 margin-bottom: 20px;
`;

export const Header = () => {
 const navigate = useNavigate();

 return (
  <Layout>
   <img onClick={() => navigate(ROUTES.HOME)} src={logo} alt='logo' />
   <Button>Kriptomat Account</Button>
  </Layout>
 );
};
