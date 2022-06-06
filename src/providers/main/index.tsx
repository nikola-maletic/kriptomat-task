import { createContext, ReactNode, useContext, useState } from 'react';

export type MainContextType = {
 favorites: any[];
 updateFavorites: (favorites: any[]) => void;
};

export const MainContext = createContext<MainContextType>({
 favorites: [],
 updateFavorites: () => {},
});

export const useMainContext = () => {
 const context = useContext(MainContext);
 if (context === undefined) {
  throw new Error(`useMainContext must be used within a MainContext.Provider`);
 }

 return context;
};

interface MainProviderProps {
 children: ReactNode;
}

export const MainProvider = ({ children }: MainProviderProps) => {
 const [favorites, setFavorites] = useState<any>([]);

 const updateFavorites = (fav: any[]) => {
  setFavorites(fav);
 };

 return (
  <MainContext.Provider
   value={{
    favorites,
    updateFavorites,
   }}>
   {children}
  </MainContext.Provider>
 );
};
