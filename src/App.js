
import { Container } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';

function App() {

  const [meanings, setMeanings] = useState([])
  const [word, setWord] = useState("")

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

      setMeanings(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(meanings);


  useEffect(() => {
    dictionaryApi()
  }, [word]);

  return (
    <div className="App" style={{height:'100vh',backgroundColor:"#282c34",color:'white'}}>
      <Container maxWidth="md" style={{display:"flex",flexDirection:"column",height:"100vh"}}>
        <Header word={word} setWord={setWord}/>
      </Container>
    </div>
  );
}

export default App;
