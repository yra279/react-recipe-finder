import styled from 'styled-components';
import {
  Header,
  AppIcon,
  AppNameComponent,
  SearchComponent,
  SearchIcon,
  SearchInput
} from './components/HeaderComponents/styles';

import RecipeComponents from './components/RecipeComponents/RecipeComponents';

import { useRef, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

const PlaceHolder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;


function App() {
  const inputRef = useRef();
  const [inputText, setInputText] = useState();
  const [arrRecipes, setArrRecipes] = useState([]);

  const changeInput = () => {
    setInputText(inputRef.current.value);
    console.log(inputText);

    apiCall(inputRef.current.value)
  };

  const apiCall = async (searchString) => {
    const API_ID = "3fa708c6";
    const API_KEY = "2eb2a325fd9fa68e93fd0842d64f37ad";

    const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}`)

    setArrRecipes(response.data.hits);
  }

  const seeMoreTextClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src='/hamburger.svg' />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src='/search-icon.svg' />
          <SearchInput placeholder='Search Recipe' ref={inputRef} onChange={changeInput} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {
          arrRecipes.length ? (
            arrRecipes.map(({ recipe }) => {
              return <RecipeComponents recipe={recipe} seeMoreTextClick={seeMoreTextClick} />
            })
          ) : (
            <PlaceHolder src='/hamburger.svg' />
          )}
      </RecipeListContainer>
    </Container >
  );
}

export default App;
