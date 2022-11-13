import React, { useState } from 'react';
import Recipe from './Recipe';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Controller } from "react-hook-form";

export default function DirectionsSection({register, control, errors, directionFields, addInputRows, addOrUpdate}) {

  return (
      <>
      <h5>Directions <button type="button" className="addButton" onClick={() => addInputRows("direction")}>+</button></h5>
      {directionFields.map((direction, index) => {
      return (<Row className="mb-3 directionRow">
        <Form.Group as={Col} sm={10} >
          <Form.Label>Instructions</Form.Label>
          <Controller control={control} name="instructions"
            render={({direction}) => (
              <Form.Control  type="text" {...register(`directions[${index}].instructions`, {required: "This field is required"})} />
            )}
          />
          <span className="errorMessage">{errors.directions && errors.directions?.[index]?.instructions.message}</span>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Optional</Form.Label>
          <Controller control={control} name="optional"
            render={({direction}) => (
              <Form.Check  {...register(`directions[${index}].optional`)} />
            )}
          />
        </Form.Group>

      </Row>)
      })}

      </>
  )

}
