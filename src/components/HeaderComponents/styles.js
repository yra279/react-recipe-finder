import styled from 'styled-components';


export const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

export const AppIcon = styled.img`
  width: 36px;
  height: 36px;
`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  margin-left: 15px;
  font-weight: bold;
`;

export const AppNameComponent = styled.div`
  display:flex;
  align-items: center;
`;