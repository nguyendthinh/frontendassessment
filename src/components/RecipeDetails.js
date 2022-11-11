import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function RecipeDetails({recipe, specials}) {

  function findSpecials(ingredientID){
    return specials.findIndex(special => special.ingredientId === ingredientID)
  }

  return (
    <Col className="justify-content-md-center">
      <div className="text-center">
        <img src={recipe.images.medium} className="detailPic"/>
        <h2>{recipe.title}</h2>
        <div>{recipe.description}</div>
      </div>
      <Row className="text-center">
        <Col><b>Prep Time</b>: {recipe.prepTime}</Col>
        <Col><b>Cook Time</b>: {recipe.cookTime}</Col>
        <Col><b>Servings</b>: {recipe.servings}</Col>
      </Row>

      <Row>
      <h3>Ingredients:</h3>
      {recipe.ingredients.map(ingredient => {

        var specialIndex = findSpecials(ingredient.uuid)
        var specialDetail = specials[specialIndex]

        return <>
          <div><b>{ingredient.amount} {ingredient.measurement}</b> {ingredient.name}</div>
          <p>{specialIndex !== -1 && <span className="specials">{specialDetail.type} &#x2022; {specialDetail.title} &#x2022; {specialDetail.text}</span>}</p>
        </>

      })}
      </Row>

      <Row>
        <h3>Directions:</h3>
        <ul>
        {recipe.directions.map(direction => {
          return <li>{direction.instructions} {direction.optional && <span><b>(optional)</b></span>}</li>
        })}
        </ul>
      </Row>

    </Col>
  )
}
