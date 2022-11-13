import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function RecipeDetails({recipe, specials}) {

  const divBackground = {
    backgroundImage: `url(${recipe.images.medium})`,
    height: '20em',
    borderRadius: '1em'
  }

  function findSpecials(ingredientID){
    return specials.findIndex(special => special.ingredientId === ingredientID)
  }

  return (
    <Col className="justify-content-md-center">
      {recipe.images !== null && <div className="cardCover" style={divBackground}/>}

      <Row className="text-right" style={{marginBottom: ".8em"}}>
        {/*{recipe.images !== null && <img src={recipe.images.medium} className="detailPic"/>}*/}
        <h2 className="recipeTitle"><b>{recipe.title}</b></h2>
        <i>{recipe.description}</i>
      </Row>
      <Row className="text-right" style={{marginBottom: "2em"}}>
        <Col><b>Prep Time</b>: {recipe.prepTime}</Col>
        <Col><b>Cook Time</b>: {recipe.cookTime}</Col>
        <Col><b>Servings</b>: {recipe.servings}</Col>
      </Row>

      <Row style={{marginBottom: "2em"}}>
        <h4><b>Ingredients:</b></h4>
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
        <h4><b>Directions:</b></h4>
        <ul>
        {recipe.directions.map(direction => {
          return <li>{direction.instructions} {direction.optional && <span><b>(optional)</b></span>}</li>
        })}
        </ul>
      </Row>

    </Col>
  )
}
