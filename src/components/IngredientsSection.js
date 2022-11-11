import React, { useState } from 'react';
import Recipe from './Recipe';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function IngredientsSection({ingredientFields, addInputRows, register, control}) {

  return (
      <>
      <h5>Ingredients <button type="button" className="addButton" onClick={() => addInputRows("ingredient")}>+</button></h5>
      {ingredientFields.map((ingredient, index) => {
        return (<Row className="mb-3 ingredientsRow">
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={ingredient.name} {...register(`ingredients[${index}].name`)} control={control}/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" name="amount" value={ingredient.amount} {...register(`ingredients[${index}].amount`)} control={control}/>
          </Form.Group>
         <Form.Group as={Col}>
            <Form.Label>Measurement</Form.Label>
            <Form.Control type="text" name="measurement" value={ingredient.measurement} {...register(`ingredients[${index}].measurement`)} control={control}/>
          </Form.Group>
        </Row>)
      })}

      </>
  )

}
