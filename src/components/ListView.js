import React, { useState } from 'react';
import Recipe from './Recipe';

export default function ListView({recipes, specials}) {

  return (
    recipes.map(recipe => {
      return <Recipe key={recipe.uuid} recipe={recipe} specials={specials}/>
    })
  )

}
