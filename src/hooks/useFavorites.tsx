import { useMainContext } from 'providers/main';
import { useCallback } from 'react';

export const useFavorites = () => {
 const { updateFavorites, favorites } = useMainContext();

 const isFavoriteById = useCallback((id: string) => favorites.some((fav: any) => fav.id === id), [favorites]);

 const handleChange = useCallback(
  (checked: boolean, crypto: any) => {
   const newFavorites = checked ? [...favorites, crypto] : favorites.filter((fav: any) => fav.id !== crypto.id);
   updateFavorites(newFavorites);
  },
  [updateFavorites, favorites]
 );

 return {
  isFavoriteById,
  handleChange,
 };
};
