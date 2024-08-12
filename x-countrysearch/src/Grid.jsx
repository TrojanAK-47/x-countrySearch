import React from "react";
import Card from './Card';
import styles from "./Grid.module.css"
import { useEffect,useState } from "react";


// other flag and countries link
// "https://xcountries-backend.azurewebsites.net/all"


const Grid = ()=>{
const [countries,setCountries]=useState([]);
const [filteredCountries,setFilteredCountries]=useState([]);

const fetchCountry =async()=>{
    try{
        let response= await fetch("https://restcountries.com/v3.1/all");
        let jsonResponse= await response.json();
        setCountries(jsonResponse);
        setFilteredCountries(jsonResponse)
        return jsonResponse;  
    }
    catch(error){
        console.error(`Error fetching data: ${error}`);
    }
}

useEffect(()=>{
    fetchCountry();
},[])


const handleChange=(e)=>{
    let filteredCountries=countries.filter(country=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredCountries(filteredCountries);
}

return <>

<div className={styles.input}><input type="text" onChange={handleChange}  /></div>

<div className={styles.container}>
    {/* {arr.map(ele=><Card/>)} */}
   
    {filteredCountries.map(country=><Card image={country.flags.png} name={country.name.common} key={country.name.common}/>)}
</div></>


}


export default Grid;