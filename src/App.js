import React, { useState, useEffect } from 'react';
import './App.css';
import ListView from './components/ListView';

function App() {

  const [recipes, setRecipes] = useState([])
  const [specials, setSpecials] = useState([])

  useEffect(() => {
    getRecipesAndSpecials()
  }, [])

  function getRecipesAndSpecials() {
    var recipeLink = "http://localhost:3001/recipes";
    var specialsLink = "http://localhost:3001/specials";

    fetch(recipeLink)
    .then((response) => response.json())
    .then((recipes) => {
      setRecipes(recipes)}
    );

    fetch(specialsLink)
    .then((response) => response.json())
    .then((specials) => {
      setSpecials(specials)}
    );

  }

  return (
    <>
      <ListView recipes={recipes} specials={specials}/>
    </>
  );
}

export default App;
