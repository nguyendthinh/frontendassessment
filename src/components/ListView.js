import React, { useState } from 'react';
import Recipe from './Recipe';

export default function ListView({recipes, specials}) {

  function findSpecials(ingredientID){
    var specialIndex = specials.findIndex(special => special.ingredientId === ingredientID)

  }

  return (
    recipes.map(recipe => {
      return <Recipe key={recipe.uuid} recipe={recipe} specials={specials}/>
    })
  )

}
