import React, { useState } from 'react';
import Recipe from './Recipe';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function DirectionsSection({directionFields, addInputRows, register, control}) {

  return (
      <>
      <h5>Directions <button type="button" className="addButton" onClick={() => addInputRows("direction")}>+</button></h5>
      {directionFields.map((direction, index) => {
      return (<Row className="mb-3 directionRow">
        <Form.Group as={Col} sm={10} >
          <Form.Label>Instructions</Form.Label>
          <Form.Control type="text" name="instructions" value={direction.instructions} {...register(`directions[${index}].instructions`)} control={control} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Optional</Form.Label>
          <Form.Check name="optional" value={direction.optional} {...register(`directions[${index}].optional`)} control={control}/>
        </Form.Group>
      </Row>)
      })}

      </>
  )

}
