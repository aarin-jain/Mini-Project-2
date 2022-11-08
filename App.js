import React from "react";
import {useState, useEffect} from "react";
import "./App.css";

const API = "https://catfact.ninja/fact";
const previousFacts = [];
const favFacts = [];
var index = 0;
let pageIndex = 0;

function App() {
  const [fact, setCat] = useState([]);
  
  const getCats = async () => {
    try {
      const response = await fetch(API);
      const fact = await response.json()
      setCat(fact)
      previousFacts[index] = fact.fact;
      index = index + 1;
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getCats();
  }, []);


  

  return (
    <main>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <h1>Cat Facts!</h1>
      <div>
        <p>Current Fact: {fact.fact}</p>
        <button onClick={()=> getCats()}>New Fact</button>
      </div>

      <div>
        <p> Previous Facts </p>
        <p id = "fact1"> {previousFacts[pageIndex]} <button onClick={()=> addFav(0)}>Add to favs</button> </p>
        <p id = "fact2"> {previousFacts[pageIndex+1]} <button onClick={()=> addFav(1)}>Add to favs</button></p>
        <p id = "fact3"> {previousFacts[pageIndex+2]} <button onClick={()=> addFav(2)}>Add to favs</button></p>
        <p id = "fact4"> {previousFacts[pageIndex+3]} <button onClick={()=> addFav(3)}>Add to favs</button></p>
        <p id = "fact5"> {previousFacts[pageIndex+4]} <button onClick={()=> addFav(4)}>Add to favs</button></p>
        <p id = "fact6"> {previousFacts[pageIndex+5]} <button onClick={()=> addFav(5)}>Add to favs</button></p>
        <p id = "fact7"> {previousFacts[pageIndex+6]} <button onClick={()=> addFav(6)}>Add to favs</button></p>
        <p id = "fact8"> {previousFacts[pageIndex+7]} <button onClick={()=> addFav(7)}>Add to favs</button></p>
        <p id = "fact9"> {previousFacts[pageIndex+8]} <button onClick={()=> addFav(8)}>Add to favs</button></p>
        <p id = "fact10"> {previousFacts[pageIndex+9]} <button onClick={()=> addFav(9)}>Add to favs</button></p>


      </div>

      <div>
        <p> Favorite Facts</p>
        <p> {favFacts[0]} </p>
        <p> {favFacts[1]} </p>
        <p> {favFacts[2]} </p>
        <p> {favFacts[3]} </p>
        <p> {favFacts[4]} </p>
        <p> {favFacts[5]} </p>
        <p> {favFacts[6]} </p>
        <p> {favFacts[7]} </p>
        <p> {favFacts[8]} </p>
        <p> {favFacts[9]} </p>
      </div>

      <div> 
      <button onClick={() => pageDown()}>Back</button>  <button onClick={() => pageUp()}>Next</button>
      </div>
    </main>
  );
  }

  function addFav(index) {
    favFacts.push(previousFacts[index]);
  }

  function pageDown() {
    if(pageIndex != 0) {
      pageIndex = pageIndex - 10;
    };
    
  
  }

  function pageUp() {
    pageIndex = pageIndex + 10;

  }

export default App

