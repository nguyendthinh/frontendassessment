import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import RecipeDetails from './RecipeDetails';
import UpdateForm from './UpdateForm';
import { Button, Col } from 'react-bootstrap';

export default function Recipe({ recipe, specials }) {

  const [detailsVisible, setDetailsVisibile] = useState(false);
  const [updateVisible, setUpdateVisibile] = useState(false);

  function openDetails() {
    setDetailsVisibile(true);
  }

  function closeDetails() {
    setDetailsVisibile(false);
  }

  function openUpdate() {
    setUpdateVisibile(true);
  }

  function closeUpdate() {
    setUpdateVisibile(false);
  }

  return (
    <Col sm={4} md={3} lg={2} className="text-center yellowSquare">
      <img src={recipe.images.medium} className="circleIcon"/>
      <div><b>{recipe.title}</b></div>
      <Button onClick={openDetails} className="viewButton">View</Button>
      {/*<Button onClick={openUpdate}>Update</Button>*/}

      <Modal
        isOpen={detailsVisible}
        onRequestClose={closeDetails}
      >
        <RecipeDetails recipe={recipe} specials={specials}/>
      </Modal>

      <Modal
        isOpen={updateVisible}
        onRequestClose={closeUpdate}
      >
        <UpdateForm recipe={recipe} specials={specials}/>
      </Modal>

    </Col>
  )
}
