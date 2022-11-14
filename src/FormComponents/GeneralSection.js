import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Controller } from "react-hook-form";

export default function GeneralSection({register, errors, control, recipe, addOrUpdate}) {

  return (
      <div className="formSection">
        <Row className="mb-3">

          <Form.Group as={Col}>
            <Form.Label><b>Recipe Name</b></Form.Label>&nbsp;
            <Controller control={control} name="title"
              render={() => (
                <Form.Control type="text" {...register("title", {required: "This field is required"})} defaultValue={addOrUpdate === "update" ? recipe.title : ""}/>
              )}
            />
            <span className="errorMessage">{errors.title && errors.title.message}</span>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label><b>Description</b></Form.Label>
            <Controller control={control} name="description"
              render={() => (
                <Form.Control type="text" {...register("description", {required: "This field is required"})} defaultValue={addOrUpdate === "update" ? recipe.description : ""}/>
              )}
            />
            <span className="errorMessage">{errors.description && errors.description.message}</span>
          </Form.Group>

        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} >
            <Form.Label><b>Prep Time</b></Form.Label>
            <Controller control={control} name="prepTime"
              render={() => (
                <Form.Control type="number" {...register("prepTime", {required: "This field is required"})} defaultValue={addOrUpdate === "update" ? recipe.prepTime : ""}/>
              )}
            />
            <span className="errorMessage">{errors.prepTime && errors.prepTime.message}</span>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label><b>Cook Time</b></Form.Label>
            <Controller control={control} name="cookTime"
              render={() => (
                <Form.Control type="number" {...register("cookTime", {required: "This field is required"})} defaultValue={addOrUpdate === "update" ? recipe.cookTime : ""}/>
              )}
            />
            <span className="errorMessage">{errors.cookTime && errors.cookTime.message}</span>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label><b>Servings</b></Form.Label>
            <Controller control={control} name="servings"
              render={() => (
                <Form.Control type="number" {...register("servings", {required: "This field is required"})} defaultValue={addOrUpdate === "update" ? recipe.servings : ""}/>
              )}
            />
            <span className="errorMessage">{errors.servings && errors.servings.message}</span>
          </Form.Group>

        </Row>

      </div>
  )

}
