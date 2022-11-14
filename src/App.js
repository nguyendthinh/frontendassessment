import React, { useState, useEffect } from 'react';
import ListView from './RecipeComponents/ListView';
import AddUpdateForm from './FormComponents/AddUpdateForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { Button, Col, Row, Container } from 'react-bootstrap';

Modal.setAppElement("#root");

function App() {

  const [recipes, setRecipes] = useState([])
  const [specials, setSpecials] = useState([])
  const [formVisible, setFormVisibile] = useState(false);
  const recipeLink = "http://localhost:3001/recipes";
  const specialsLink = "http://localhost:3001/specials";

  function openForm() {
    setFormVisibile(true);
  }

  function closeForm() {
    setFormVisibile(false);
  }

  useEffect(() => {
    getRecipesAndSpecials()
  }, [])

  function getRecipesAndSpecials() {

    fetch(recipeLink)
    .then((response) => response.json())
    .then((recipes) => {
      setRecipes(recipes)}
    );

    fetch(specialsLink)
    .then((response) => response.json())
    .then((specials) => {
      setSpecials(specials)}
    );

  }

  return (
    <>
      <Container fluid="true">

      <Button onClick={openForm} className="addNewRecipe viewButton">Add</Button>

        <ListView recipes={recipes} specials={specials} setRecipes={setRecipes}/>

        <Modal
          isOpen={formVisible}
          onRequestClose={closeForm}
        >
          <AddUpdateForm addOrUpdate={"add"} recipe={null} closeForm={closeForm} setRecipes={setRecipes}/>
        </Modal>

      </Container>

    </>
  );
}

export default App;
