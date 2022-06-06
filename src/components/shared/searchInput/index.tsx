import styled from 'styled-components';
import closeIcon from 'assets/icons/close.svg';
import searchIcon from 'assets/icons/search.svg';

const InputWithIcons = styled.span`
 background: #ffffff;
 border-radius: 6px;
 display: inline-flex;
 align-items: center;
 padding: 10px;
 max-height: 30px;
 width: 300px;
 & > input {
  border: none;
  outline: none;
  padding: 7px 0;
  width: 100%;
 }
 & img:first-child {
  height: 20px;
  margin-right: 10px;
  width: 20px;
 }
 & img:last-child {
  height: 15px;
  margin-left: 10px;
  width: 15px;
  cursor: pointer;
 }
`;

export interface SearchInputProps {
 onChange: (value: string) => void;
 value: string;
}

export const SearchInput = ({ onChange, value }: SearchInputProps) => {
 return (
<InputWithIcons>
    <img src={searchIcon} alt='search icon' />
    <input type='text' value={value} onChange={(e) => onChange(e.target.value)} placeholder='Search' className='search-input' />
   {value && <img src={closeIcon} onClick={() => onChange('')} alt='close icon' />
}
</InputWithIcons>
 );
};
