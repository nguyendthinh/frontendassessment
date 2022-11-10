import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import RecipeDetails from './RecipeDetails';

Modal.setAppElement("#root");

export default function Recipe({ recipe, specials }) {

  const [modalVisible, setModalVisibile] = useState(false);

  function openModal(ingredientID) {
    setModalVisibile(true);
  }

  function closeModal() {
    setModalVisibile(false);
  }

  return (
    <div>
      {recipe.title}
      <img src={recipe.images.small} />
      <button onClick={openModal}>View Details</button>

      <Modal
        isOpen={modalVisible}
        onRequestClose={closeModal}
      >
        <RecipeDetails recipe={recipe} specials={specials}/>
      </Modal>
      
    </div>
  )
}
