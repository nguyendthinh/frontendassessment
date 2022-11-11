import React, { useState } from 'react';
import Recipe from './Recipe';
import { Container, Row } from 'react-bootstrap';

export default function ListView({recipes, specials, setRecipes}) {

  return (
      <Row className="justify-content-md-center">
        {recipes.map(recipe => {
          return <Recipe key={recipe.uuid} recipe={recipe} specials={specials} setRecipes={setRecipes}/>
        })}
      </Row>
  )

}
