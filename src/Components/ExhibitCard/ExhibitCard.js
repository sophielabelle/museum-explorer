import React from "react";
import { DogContext } from "../../DogContext/DogContext";
import "./ExhibitCard.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";



export const ExhibitCard = ({card}) => {

  const { chooseBreed } = useContext(DogContext);
  const [breed, setBreed] = chooseBreed

  const selectBreed = (event) => {
    console.log(event.target.parentElement.id)
    const selected = event.target.parentElement.id;
    setBreed(selected);
  }

  const altText = card.toLowerCase()
  return (
    <NavLink to={`/dogexhibits/${card}`}>
      <div id={card} className="exhibit-card-container" onClick={(event) => selectBreed(event)} >
        <div id={altText} className="exhibit-card">
          <img src={require(`../../assets/${card}.jpeg`)} alt={altText}/>
        </div>
        <p className="breed-name">{card}</p>
      </div>
    </NavLink>
  )
}

//