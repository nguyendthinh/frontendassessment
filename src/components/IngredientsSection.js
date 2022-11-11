import React, { useState } from 'react';
import Recipe from './Recipe';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Controller } from "react-hook-form";


export default function IngredientsSection({ingredientFields, addInputRows, register, control, addOrUpdate}) {

  return (
      <>
      <h5>Ingredients <button type="button" className="addButton" onClick={() => addInputRows("ingredient")}>+</button></h5>
      {ingredientFields.map((ingredient, index) => {
        return (<Row className="mb-3 ingredientsRow">

          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            {/*<Form.Control type="text" name="name" {...register(`ingredients[${index}].name`)} value={addOrUpdate === "update" ? ingredient.name : undefined} />*/}
            <Controller control={control} name="name"
              render={({ingredient}) => (
                <Form.Control  type="text"  {...register(`ingredients[${index}].name`)} />
              )}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Amount</Form.Label>
            {/*<Form.Control type="text" name="amount" {...register(`ingredients[${index}].amount`) } value={addOrUpdate === "update" ? ingredient.amount : undefined}/>*/}
            <Controller control={control} name="amount"
              render={({ingredient}) => (
                <Form.Control  type="text"  {...register(`ingredients[${index}].amount`)} />
              )}
            />
          </Form.Group>

         <Form.Group as={Col}>
            <Form.Label>Measurement</Form.Label>
            {/*<Form.Control type="text" name="measurement" {...register(`ingredients[${index}].measurement`)} value={addOrUpdate === "update" ? ingredient.measurement : undefined}/>*/}
            <Controller control={control} name="measurement"
              render={({ingredient}) => (
                <Form.Control  type="text"  {...register(`ingredients[${index}].measurement`)} />
              )}
            />
          </Form.Group>
        </Row>)
      })}

      </>
  )

}
