import React, { useState } from 'react';
import Recipe from './Recipe';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Controller } from "react-hook-form";


export default function IngredientsSection({register, control, errors, ingredientFields, addInputRows, addOrUpdate}) {

  return (
      <div className="formSection" >
        <h5 style={{marginBottom: '1em'}}><b>INGREDIENTS</b> <button type="button" className="addButton" onClick={() => addInputRows("ingredient")}>+</button></h5>

        {ingredientFields.map((ingredient, index) => {
          return (<Row className="mb-3 ingredientsRow">

            <Form.Group as={Col}>
              <Form.Label><b>Name</b></Form.Label>
              <Controller control={control} name="name"
                render={({ingredient}) => (
                  <Form.Control  type="text"  {...register(`ingredients[${index}].name`, {required: "This field is required"})} />
                )}
              />
              <span className="errorMessage">{errors.ingredients?.[index]?.name && errors.ingredients?.[index]?.name.message}</span>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label><b>Amount</b></Form.Label>
              <Controller control={control} name="amount"
                render={({ingredient}) => (
                  <Form.Control  type="number"  {...register(`ingredients[${index}].amount`, {required: "This field is required"})} />
                )}
              />
              <span className="errorMessage">{errors.ingredients?.[index]?.amount && errors.ingredients?.[index]?.amount.message}</span>
            </Form.Group>

           <Form.Group as={Col}>
              <Form.Label><b>Measurement</b></Form.Label>
              <Controller control={control} name="measurement"
                render={({ingredient}) => (
                  <Form.Control  type="text"  {...register(`ingredients[${index}].measurement`)} />
                )}
              />
            </Form.Group>
          </Row>)
        })}

      </div>
  )

}
