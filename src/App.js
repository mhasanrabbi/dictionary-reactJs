import { Container, Switch, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Definitions from './components/Definitions';
import Header from './components/Header';

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false);

  const DarkMode = withStyles({
    switchBase: {
      color: grey[500],
      '&$checked': {
        color: grey[300],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  // const dictionaryApi = async() => {
  //   try {
  //     const data = await axios.get(
  //       `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
  //     );

  //     setMeanings(data.data);

  //   } catch(error) {
  //     console.log(error)
  //   }

  // }

  // console.log(meanings);
  
  useEffect(() => {
    const dictionaryApi = async () => {
        const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        );

        setMeanings(data.data);
      };

      if (word && !meanings.length) {
        dictionaryApi();
      } else {
        const timeoutId = setTimeout(() => {
          if(word) {
            dictionaryApi();
            console.log("Call")
          }
        }, 1000);

        return () => {
          clearTimeout(timeoutId);
        }
      }

    }, [word, category]);

  return (
    <div style={{ 
    height: "100vh", 
    backgroundColor: LightMode ? "#fff" : "#020140", 
    color: LightMode ? "black" : "#fff",
    transition: "all 0.5s linear"
    }}
    >
      <Container maxWidth="md" 
      style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-evenly"}}
      >
      <div style={{position:"absolute", top: 0, right: 15, paddingTop: 10}}>
        <span>{LightMode ? "Dark" : "Light"} Mode</span>
        <DarkMode checked={LightMode} onChange={() => setLightMode(!LightMode)}/>
      </div>
        <Header 
          category={category} 
          setCategory={setCategory} 
          word={word}
          setWord={setWord}
          LightMode={LightMode}
        />
        {meanings && (
        <Definitions 
          word={word} 
          meanings={meanings} 
          category={category}
          LightMode={LightMode}
        />
        )}
      </Container>
    </div>
  );
}

export default App;
