import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import { LineChart } from "./LineChart";

function App() {

  const [objInfoMoedas, setObj] = useState([]);

  useEffect(() => {
  async function get(){
    // A sintaxe try/catch separa um bloco de codigo para ser testado, se ocorrer tudo bem, ele segue no try, se ocorrer algum erro, cai no catch
    try {
      const objetoJson = await axios.get("http://api.coindesk.com/v1/bpi/historical/close.json");        
      setObj(objetoJson.data.bpi);
    } catch (error) {
      console.error(error);
    }
  }
  // Invocando a função que criei dentro da callback do useEffect
  get();
  }, []);


  
  if(objInfoMoedas!==[]){
    console.log(objInfoMoedas)
  } 
  return (
    <>
    <LineChart lbls={objInfoMoedas}/>
    </>
  );
}

export default App;
