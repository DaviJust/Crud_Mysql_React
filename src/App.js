import React, {useState} from "react"
import './App.css';

function App() {
  const [values, setvalues] = useState();

  const handleChangesValues = (value) => {
    setvalues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const handleClickButton = () => (
    console.log(values)
  );
  
  return (
    <div className=" app--container">
    <div  className="mb-3 register--container">
      <h1>Scrim Shop</h1>
      <input type="text" name="name" placeholder='Nome' className=' form-control register--input' onChange={handleChangesValues}></input>
      <input type="text" name="cost" placeholder='Preco' className=' form-control register--input'  onChange={handleChangesValues}></input>
      <input type="text" name="category" placeholder='categoria' className='form-control  register--input' onChange={handleChangesValues}></input>
       <button className="btn btn-primary" onClick={() => handleClickButton()}>Cadastrar</button>
    </div>

    </div>
  );
}

export default App;
