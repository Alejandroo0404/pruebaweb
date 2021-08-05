import React,{useEffect, useState} from "react"
import Navbar from "./components/Navbar"
import Characters from "./components/Characters";



function App() {
  const [characters, setCharacters] = useState([]); 

  const initialUrl = "https://restcountries.eu/rest/v2/all";
  // const fetchCharacters = (url) => {
  //   fetch(url).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error))
  // };

  const fetchCharacters = (url) => {
    fetch(url).then(response => response.json()).then(data => setCharacters(data)).catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(initialUrl);    
  }, [])

  return (
    <>
      <Navbar brand="Prueba Web" />
      <div className="container mt-5">
        <Characters characters={characters} />
      </div>
    </>
    
  );
}

export default App;
