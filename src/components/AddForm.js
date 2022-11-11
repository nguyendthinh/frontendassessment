import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

export default function AddForm() {

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
      <Form.Group className="mb-3">
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control type="text" {...register("title")} name="title"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cook Time</Form.Label>
        <Form.Control type="text"{...register("cookTime")} name="cookTime" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" {...register("description")} name="description"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Prep Time</Form.Label>
        <Form.Control type="text" {...register("prepTime")} name="prepTime" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Servings</Form.Label>
        <Form.Control type="text" {...register("servings")} name="servings"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add New Recipe
      </Button>
    </Form>
    )
}
