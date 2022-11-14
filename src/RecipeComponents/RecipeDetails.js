import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function RecipeDetails({recipe, specials}) {

  const divBackground = {
    backgroundImage: recipe.images !== null ? `url(${recipe.images.medium})` : 'none',
    backgroundColor: recipe.images !== null ? 'none' : 'orange',
    height: '20em',
    borderRadius: '1em'
  }

  function findSpecials(ingredientID){
    return specials.findIndex(special => special.ingredientId === ingredientID)
  }

  return (
    <Col className="justify-content-md-center">
      <div className="cardCover" style={divBackground}/>

      <Row className="text-right" style={{marginBottom: ".8em"}}>
        <h2 className="recipeTitle"><b>{recipe.title}</b></h2>
        <i>{recipe.description}</i>
      </Row>
      <Row className="text-right" style={{marginBottom: "2em"}}>
        <Col><b>Prep Time</b>: {recipe.prepTime}</Col>
        <Col><b>Cook Time</b>: {recipe.cookTime}</Col>
        <Col><b>Servings</b>: {recipe.servings}</Col>
      </Row>

      <Row style={{marginBottom: "1.6em"}}>
        <h4><b>Ingredients:</b></h4>
        {recipe.ingredients.map(ingredient => {

          var specialIndex = findSpecials(ingredient.uuid)
          var specialDetail = specials[specialIndex]

          return (<div key={`${ingredient.name}${recipe.uuid}`}>
            <div><b>{ingredient.amount} {ingredient.measurement}</b> {ingredient.name}</div>
            <p>{specialIndex !== -1 && <span className="specials">{specialDetail.type} &#x2022; {specialDetail.title} &#x2022; {specialDetail.text}</span>}</p>
          </div>)

        })}
      </Row>

      <Row>
        <h4><b>Directions:</b></h4>
        <ul>
        {recipe.directions.map(direction => {
          return <li key={`${direction.instructions}${recipe.uuid}`}>{direction.instructions} {direction.optional && <span><b>(optional)</b></span>}</li>
        })}
        </ul>
      </Row>

    </Col>
  )
}
