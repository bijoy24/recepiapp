import React,{useEffect,useState} from 'react';
import './App.css';
import Recepi from './component/Recepi'
const App = ()=>{

const appId = "ee8917e5"
const appkey = '02d8d1060e63d6ac13e1198cc6744766'
const [recepi ,setrecepi] =useState([]);
const [Search ,setSearch] =useState('');
const [query,setquery] =useState('chicken')
  useEffect(()=>{
    getRecepi();
  },[query])
  const getRecepi = async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appkey}`);
    const data = await response.json();
    setrecepi(data.hits);
  }
  const searchHandler =(e)=>{
    setSearch(e.target.value);
  }
  const updatesearch =(e)=>{
    e.preventDefault();
    setquery(Search);
    setSearch('');
  }
  return (
    <div className ="App">
      <div>
        <form className ="search-form" onSubmit ={updatesearch}>
          <input className="search-input" type ='text' value ={Search} onChange ={searchHandler}></input>
          <button className ="search-button">Search</button>
        </form>
      </div>
      <div className ="allrecepi">
      {
          recepi.map(recepidata=>(
            <Recepi 
            key={recepidata.recipe.label}
            title ={recepidata.recipe.label}
            image ={recepidata.recipe.image}
            calories ={recepidata.recipe.calories}
            />
          ))
        }
      </div>
    </div>
  );
}


export default App;
