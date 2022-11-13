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

  const {register, handleSubmit, control, formState: {errors}} = useForm({
    defaultValues: {
      ingredients: addOrUpdate === "add" ? emptyIngredientsField : recipe.ingredients,
      directions: addOrUpdate === "add" ? emptyDirectionsField : recipe.directions,
    }
  });

  const {fields: ingredientFields, append: ingredientAppend, remove: ingredientRemove} = useFieldArray({
    control,
    errors,
    name: "ingredients"
  })

  const {fields: directionFields, append: directionAppend, remove: directionRemove} = useFieldArray({
    control,
    errors,
    name: "directions"
  })


  function addInputRows(type){
      if (type === "ingredient") {
        ingredientAppend({amount: "", measurement: "", name: ""})
      } else if (type === "direction") {
        directionAppend({instructions: "", optional: false})
      }
  }

  function removeInputRows(type, index){
      if (type === "ingredient") {
        ingredientRemove(index)
      } else if (type === "direction") {
        directionRemove(index)
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
        })

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
        })

    }

  }

  return (
    <Form onSubmit={handleSubmit(data => addOrUpdateRecipe(data, addOrUpdate))}>

      <h3>{addOrUpdate === "add" ? <b>NEW RECIPE</b> : <b>UPDATE RECIPE</b>}</h3>

      <GeneralSection register={register} control={control} errors={errors} recipe={recipe} addOrUpdate={addOrUpdate}/>

      <IngredientsSection register={register} control={control} errors={errors} ingredientFields={ingredientFields} addInputRows={addInputRows} removeInputRows={removeInputRows} addOrUpdate={addOrUpdate}/>

      <DirectionsSection register={register} control={control} errors={errors} directionFields={directionFields} addInputRows={addInputRows} removeInputRows={removeInputRows} addOrUpdate={addOrUpdate}/>

      <Button variant="warning" type="submit">
        {addOrUpdate === "add" ? <b>Add Recipe</b> : <b>Update Recipe</b>}
      </Button>
    </Form>
    )
}
