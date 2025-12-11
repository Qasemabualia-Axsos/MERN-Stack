import { useState } from "react";
import FruitForm from "./components/FruitForm";
function App() {
    const [tabs,setTaps]=useState("");
    const onClickHandler=(e)=>{
      
    }
  return (
    <>
      <FruitForm />
    </>
  );
}

export default App;
