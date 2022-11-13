import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import RecipeDetails from './RecipeDetails';
import AddForm from './AddForm';
import { Button, Col, Row } from 'react-bootstrap';

export default function Recipe({ recipe, specials, setRecipes }) {

  const [detailsVisible, setDetailsVisibile] = useState(false);
  const [updateVisible, setUpdateVisibile] = useState(false);
  const divBackground = {
    backgroundImage: recipe.images !== null ? `url(${recipe.images.medium})` : 'none',
    backgroundColor: recipe.images !== null ? 'none' : 'orange'
  }

  function openDetails() {
    setDetailsVisibile(true);
  }

  function closeDetails() {
    setDetailsVisibile(false);
  }

  function openUpdate() {
    setUpdateVisibile(true);
  }

  function closeForm() {
    setUpdateVisibile(false);
  }

  return (
    <Col sm={4} md={3} lg={2} className="text-center yellowSquare">
      <div className="cardCover" style={divBackground}/>
      <Row style={{marginBottom: '1em'}}>
        <h5 style={{marginBottom: '.25em'}}><b>{recipe.title}</b></h5>
        <span>{recipe.cookTime} Mins &#x2022; Serves {recipe.servings}</span>
      </Row>
      <Button onClick={openDetails} className="viewButton">View</Button>&nbsp;&nbsp;
      <Button onClick={openUpdate} className="viewButton">Update</Button>

      <Modal
        isOpen={detailsVisible}
        onRequestClose={closeDetails}
        name="detailsModal"
      >
        <RecipeDetails recipe={recipe} specials={specials}/>
      </Modal>

      <Modal
        isOpen={updateVisible}
        onRequestClose={closeForm}
      >
        <AddForm addOrUpdate={"update"} recipe={recipe} closeForm={closeForm} setRecipes={setRecipes}/>
      </Modal>

    </Col>
  )
}
