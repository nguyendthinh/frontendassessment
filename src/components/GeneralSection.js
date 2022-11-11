import React, { useState } from 'react';
import Recipe from './Recipe';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Controller } from "react-hook-form";

export default function GeneralSection({recipe, register, control, addOrUpdate}) {

  return (
      <>
      <h3><b>New Recipe</b></h3>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Recipe Name</Form.Label>
          {/*<Form.Control type="text" {...register("title")} name="title" value={addOrUpdate === "update" ? recipe.title : undefined}/>*/}
          <Controller control={control} name="title"
            render={() => (
              <Form.Control type="text" {...register("title")} defaultValue={addOrUpdate === "update" ? recipe.title : ""}/>
            )}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          {/*<Form.Control type="text" {...register("description")} name="description" value={addOrUpdate === "update" ? recipe.description : undefined}/>*/}
          <Controller control={control} name="description"
            render={() => (
              <Form.Control type="text" {...register("description")} defaultValue={addOrUpdate === "update" ? recipe.description : ""}/>
            )}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Prep Time</Form.Label>
          {/*<Form.Control type="text" {...register("prepTime")} name="prepTime" value={addOrUpdate === "update" ? recipe.prepTime : undefined}/>*/}
          <Controller control={control} name="prepTime"
            render={() => (
              <Form.Control type="text" {...register("description")} defaultValue={addOrUpdate === "update" ? recipe.prepTime : ""}/>
            )}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Cook Time</Form.Label>
          {/*<Form.Control type="text"{...register("cookTime")} name="cookTime" value={addOrUpdate === "update" ? recipe.cookTime : undefined}/>*/}
          <Controller control={control} name="cookTime"
            render={() => (
              <Form.Control type="text" {...register("cookTime")} defaultValue={addOrUpdate === "update" ? recipe.cookTime : ""}/>
            )}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Servings</Form.Label>
          {/*<Form.Control type="text" {...register("servings")} name="servings" value={addOrUpdate === "update" ? recipe.servings : undefined}/>*/}
          <Controller control={control} name="servings"
            render={() => (
              <Form.Control type="text" {...register("servings")} defaultValue={addOrUpdate === "update" ? recipe.servings : ""}/>
            )}
          />
        </Form.Group>
      </Row>

      </>
  )

}
