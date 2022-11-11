import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

export default function UpdateForm({recipe}) {

  const {register, handleSubmit, error} = useForm();
  const recipeLink = "http://localhost:3001/recipes";

  function addNewRecipe(data) {
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

  return (
    <Form onSubmit={handleSubmit(addNewRecipe)}>

      <h3><b>Update Recipe</b></h3>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control type="text" {...register("title")} name="title" value={recipe.title}/>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" {...register("description")} name="description" value={recipe.description}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Prep Time</Form.Label>
          <Form.Control type="text" {...register("prepTime")} name="prepTime" value={recipe.prepTime}/>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Cook Time</Form.Label>
          <Form.Control type="text"{...register("cookTime")} name="cookTime" value={recipe.cookTime}/>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Servings</Form.Label>
          <Form.Control type="text" {...register("servings")} name="servings" value={recipe.servings}/>
        </Form.Group>
      </Row>

      <Button variant="warning" type="submit">
        Update Recipe
      </Button>
    </Form>
    )
}
