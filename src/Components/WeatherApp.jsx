import React, { useState ,useEffect } from "react";
import { BsCloudsFill } from "react-icons/bs";

const WeatherApp = () => {

const [ city , setCity] = useState(null) 
const [search , setSearch] = useState('Karachi')

useEffect( () => {

    const fetchApi = async () => {
        
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b0a0363bc2848e0354a566147a067377`
        const response  =   await fetch(url)
        const resJson =  await response.json() ; 
        // console.log(resJson);
        setCity(resJson.main)

    }
    
    fetchApi()
} , [search])

  return (
    <>
      
        <div className="box">
            <div className="input_data">
                <input type="text" value={search    } className="inputField" onChange={(e) => { setSearch(e.target.value)}} />
            </div>


 
{!city ? (
<div>

    <p className="error_found"> No Data Found  </p>
    
</div>

  )
        :  (
        <div>
            <div className="info">

            <div className="info_data">
                
                <h2 className="location">
                <BsCloudsFill />
                
                </h2>
                
                <h2 className="city_names">{search}</h2>
            </div>
            <h1 className="celcius_temp">{city.temp}</h1>
            <h3 className="temp-max">Min : {city.temp_min} | Max {city.temp_max}</h3>
            </div>



            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>

            </div>
        )

}
           
        

        </div>
    
    </>
  );
};

export default WeatherApp;
