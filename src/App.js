import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en_US/hello"
      );

      setMeanings(data.data);

    } catch(error) {
      console.log(error)
    }

  }

  console.log(meanings);
  
  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <Container maxWidth="md">
      Dictionary
    </Container>
  );
}

export default App;
