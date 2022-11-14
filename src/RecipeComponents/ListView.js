import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Container, Row } from 'react-bootstrap';

export default function ListView({recipes, specials, setRecipes}) {

  return (
      <Row className="justify-content-md-center">
        {recipes.map(recipe => {
          return <RecipeCard key={recipe.uuid} recipe={recipe} specials={specials} setRecipes={setRecipes}/>
        })}
      </Row>
  )

}
