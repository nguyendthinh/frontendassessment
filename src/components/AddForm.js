import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm, useFieldArray } from "react-hook-form";
import IngredientsSection from './IngredientsSection';
import DirectionsSection from './DirectionsSection';

export default function AddForm({addOrUpdate, recipe}) {

  const emptyIngredientsField = [{amount: undefined, measurement: undefined, name: undefined}]
  const emptyDirectionsField = [{instructions: undefined, optional: undefined}]

  const {register, handleSubmit, error, control} = useForm({
    defaultValues: {
      ingredients: addOrUpdate === "add" ? emptyIngredientsField : recipe.ingredients,
      directions: addOrUpdate === "add" ? emptyDirectionsField : recipe.directions,
    }
  });
  const {fields: ingredientFields, append: ingredientAppend} = useFieldArray({
    control,
    name: "ingredients"
  })
  const {fields: directionFields, append: directionAppend} = useFieldArray({
    control,
    name: "directions"
  })
  const recipeLink = "http://localhost:3001/recipes"

  function addNewRecipe(data) {
    data.images = null

    fetch(recipeLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function addInputRows(type){
    if (type === "ingredient") {
      ingredientAppend({amount: undefined, measurement: undefined, name: undefined})
    } else if (type === "direction") {
      directionAppend({instructions: undefined, optional: false})
    }
  }

  return (
    <Form onSubmit={handleSubmit(addNewRecipe)}>
      <h3><b>New Recipe</b></h3>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control type="text" {...register("title")} name="title" value={addOrUpdate === "update" ? recipe.title : undefined}/>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" {...register("description")} name="description" value={addOrUpdate === "update" ? recipe.description : undefined}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Prep Time</Form.Label>
          <Form.Control type="text" {...register("prepTime")} name="prepTime" value={addOrUpdate === "update" ? recipe.prepTime : undefined}/>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Cook Time</Form.Label>
          <Form.Control type="text"{...register("cookTime")} name="cookTime" value={addOrUpdate === "update" ? recipe.cookTime : undefined}/>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Servings</Form.Label>
          <Form.Control type="text" {...register("servings")} name="servings" value={addOrUpdate === "update" ? recipe.servings : undefined}/>
        </Form.Group>
      </Row>

      <IngredientsSection ingredientFields={ingredientFields} addInputRows={addInputRows} register={register} control={control}/>

      <DirectionsSection directionFields={directionFields} addInputRows={addInputRows} register={register} control={control}/>

      <Button variant="warning" type="submit">
        <b>Add Recipe</b>
      </Button>
    </Form>
    )
}
