import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm, useFieldArray, Controller } from "react-hook-form";
import IngredientsSection from './IngredientsSection';
import DirectionsSection from './DirectionsSection';
import GeneralSection from './GeneralSection';

export default function AddForm({addOrUpdate, recipe, closeForm, setRecipes}) {

  const recipeLink = "http://localhost:3001/recipes/"
  const emptyIngredientsField = [{amount: "", measurement: "", name: ""}]
  const emptyDirectionsField = [{instructions: "", optional: ""}]

  const {register, handleSubmit, error, control} = useForm({
    defaultValues: {
      ingredients: addOrUpdate === "add" ? emptyIngredientsField : recipe.ingredients,
      directions: addOrUpdate === "add" ? emptyDirectionsField : recipe.directions,
    }
  });

  const {fields: ingredientFields, append: ingredientAppend} = useFieldArray({
    control,
    name: "ingredients"
  })

  const {fields: directionFields, append: directionAppend} = useFieldArray({
    control,
    name: "directions"
  })


  function addInputRows(type){
      if (type === "ingredient") {
        ingredientAppend({amount: "", measurement: "", name: ""})
      } else if (type === "direction") {
        directionAppend({instructions: "", optional: false})
      }
  }

  function updateRecipeState(addOrUpdate, data){

    if (addOrUpdate === "add") {
      setRecipes(prevRecipes => {
        return [...prevRecipes, data]
      })
    } else if (addOrUpdate === "update") {
      setRecipes(prevRecipes => {
        let cloneRecipe = [...prevRecipes]
        const recipeIndex = cloneRecipe.findIndex(clone => clone.uuid === recipe.uuid)
        cloneRecipe[recipeIndex] = data
        return cloneRecipe
      })
    }

  }

  function addOrUpdateRecipe(data, addOrUpdate) {
    data.images = null

    if (addOrUpdate === "add") {

      fetch(recipeLink, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
          updateRecipeState(addOrUpdate, data)
          closeForm()
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    } else if (addOrUpdate === "update") {

      fetch(recipeLink + recipe.uuid, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
          updateRecipeState(addOrUpdate, data)
          closeForm()
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

  }

  return (
    <Form onSubmit={handleSubmit(data => addOrUpdateRecipe(data, addOrUpdate))}>

      <GeneralSection recipe={recipe} register={register} addOrUpdate={addOrUpdate} control={control}/>

      <IngredientsSection ingredientFields={ingredientFields} addInputRows={addInputRows} register={register} addOrUpdate={addOrUpdate} control={control}/>

      <DirectionsSection directionFields={directionFields} addInputRows={addInputRows} register={register} addOrUpdate={addOrUpdate} control={control}/>

      <Button variant="warning" type="submit">
        {addOrUpdate === "add" ? <b>Add Recipe</b> : <b>Update Recipe</b>}
      </Button>
    </Form>
    )
}
