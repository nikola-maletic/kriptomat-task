import styled from 'styled-components';
import StarCheck from 'assets/icons/star-check.svg';
import StarUnchek from 'assets/icons/star-uncheck.svg';

const Star = styled.img`
 cursor: pointer;
`;

export interface FavoriteButtonProps {
 checked: boolean;
 onChange: (checked: boolean) => void;
}

export const FavoriteButton = ({ checked, onChange }: FavoriteButtonProps) => {
 return (
  <Star
   src={checked ? StarCheck : StarUnchek}
   onClick={(e) => {
    e.stopPropagation();
    onChange(!checked);
   }}
  />
 );
};
