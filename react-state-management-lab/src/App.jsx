// src/App.jsx
import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const handleAddFighter = (zombieFighter) => {
    //Used ChatGPT to help me with the logic here.
    if (money >= zombieFighter.price) {
      setTeam((prevTeam) => [...prevTeam, zombieFighter]);
      setMoney((prevMoney) => prevMoney - zombieFighter.price);
      setTotalStrength((prevStrength) => prevStrength + zombieFighter.strength); //Will probably want to create a parallel function that removes strenghth as fighters are removed once remove functionality is added later.
      setTotalAgility((prevAgility) => prevAgility + zombieFighter.agility);
      console.log(`${zombieFighter.name} addded to team!`);
    } else {
      console.log(`Not enough money to add ${zombieFighter.name}`);
    }
  };

  return (
    //Used ChatGPT to help me with the logic inside of the add button.
    //Used ChatGPT to help with syntax of my ternary statement, but I knew the logic and was having trouble getting syntax that would render.
    <>
      <h1>Money: ${money}</h1>
      <h1>Team Strength: {totalStrength}</h1>
      <h1>Team Agility: {totalAgility}</h1>
      <h2>Team: </h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter, idx) => (
            <ul key={idx}>
              <li> Name: {fighter.name} </li>
              <li> Price: ${fighter.price} </li>
              <li> Strength: {fighter.strength} </li>
              <li> Agility: {fighter.agility} </li>
              <img src={fighter.img} />
            </ul>
          ))}
        </ul>
      )}

      <div>
        {zombieFighters.map((zombieFighter, idx) => (
          <ul key={idx}>
            <li> Name: {zombieFighter.name} </li>
            <li> Price: ${zombieFighter.price} </li>
            <li> Strength: {zombieFighter.strength} </li>
            <li> Agility: {zombieFighter.agility} </li>
            <img src={zombieFighter.img} />
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </ul>
        ))}
      </div>
    </>
  );
};

export default App;
