import { MainLayout } from 'components/layout';
import { MainProvider } from 'providers/main';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'route';
import './App.css';

export function App() {
 return (
  <BrowserRouter>
   <MainLayout>
    <MainProvider>
     <AppRoutes />
    </MainProvider>
   </MainLayout>
  </BrowserRouter>
 );
}
