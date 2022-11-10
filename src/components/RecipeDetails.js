import React, {useState} from 'react';

export default function RecipeDetails({recipe, specials}) {

  function findSpecials(ingredientID){
    return specials.findIndex(special => special.ingredientId === ingredientID)
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.images.medium} />
      <p>Cooktime: {recipe.cookTime}</p>
      <p>Description: {recipe.description}</p>
      <p>Prep Time: {recipe.prepTime}</p>
      <p>Servings: {recipe.servings}</p>

      <h3>Ingredients</h3>
      {recipe.ingredients.map(ingredient => {

        var specialIndex = findSpecials(ingredient.uuid)
        var specialDetail = specials[specialIndex]

        return <>
          <p><b>{ingredient.name}</b></p>
          <p>{specialIndex !== -1 && <span>{specialDetail.title} {specialDetail.type} {specialDetail.text}</span>}</p>
          <p>Amount: {ingredient.amount}</p>
          <p>Measurement: {ingredient.measurement}</p>
        </>

      })}

      <h2>Directions:</h2>
      {recipe.directions.map(direction => {
        return <p>{direction.instructions} {direction.optional && <span> (optional)</span>}</p>
      })}

    </div>
  )
}
