import React from 'react'
import BarChart from './BarChart';
import {useState,useEffect} from 'react'
import {MenuItem,FormControl,Select} from '@material-ui/core'
import './App.css';
import LineGraph from './LineGraph'
import Map from './Map';
// import "leaflet/dist/leaflet.css"
function App() {
const [data,setData]=useState([]);
const getCovidData=async()=>{
  try{
    const res=await fetch("https://data.covid19india.org/data.json");
    const actualData=await res.json();
    // console.log(actualData.statewise)
    setData(actualData.statewise)
  }
  catch(err){
    console.log(err)
  }
}

  useEffect(()=>{
    getCovidData();
  },[]);
  

  return (
    <>
    <h1 className="h1">INDIA COVID-19 DASHBOARD</h1>
    <div className="container-fluid mt-5">
                <div className="main">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span> COVID-19</h1>
                </div>
    
    
    <div className="table-responsive">
    <thead className="table table-hover">
      <tr className="thead-dark">
        <th>State</th>
        <th>TotalCase</th>
        <th>Active</th>
        <th>Recovered</th>
        <th>Death</th>
      </tr>
    </thead>
    <tbody>{
    data.map((data,ind)=>{
        return(
         <tr key={ind}>
        <td>{data.state}</td>
        <td>{data.confirmed}</td>
        <td>{data.active}</td>
        <td>{data.recovered}</td>
        <td>{data.deaths}</td>
      </tr>
        )
    })
  }
    </tbody>
    </div>
    {/* <BarChart/>
   <Map/> */}
    </div>
    </>
  )
  
}

export default App;
