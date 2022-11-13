import React, { useState } from 'react';
import Recipe from './Recipe';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Controller } from "react-hook-form";

export default function DirectionsSection({register, control, errors, directionFields, addInputRows, removeInputRows, addOrUpdate}) {

  return (
      <div className="formSection">

        <h5 style={{marginBottom: '1em'}}><b>DIRECTIONS</b>   <button type="button" className="addButton" onClick={() => addInputRows("direction")}>+</button></h5>
        {directionFields.map((direction, index) => {
        return (<Row className="mb-3 directionRow">

        <Col sm={1}>
          <button className="removeInputRows" title="Add another ingredient" type="button" onClick={() => removeInputRows("direction", index)}><h5>x</h5></button>
        </Col>

          <Form.Group as={Col} sm={9} >
            <Form.Label><b>Instructions {index + 1}</b></Form.Label>
            <Controller control={control} name="instructions"
              render={({direction}) => (
                <Form.Control  type="text" {...register(`directions[${index}].instructions`, {required: "This field is required"})} />
              )}
            />
            <span className="errorMessage">{errors.directions?.[index]?.instructions && errors.directions?.[index]?.instructions.message}</span>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label><b>Optional</b></Form.Label>
            <Controller control={control} name="optional"
              render={({direction}) => (
                <Form.Check  {...register(`directions[${index}].optional`)} />
              )}
            />
          </Form.Group>

        </Row>)
        })}

      </div>
  )

}
