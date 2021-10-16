// import React from 'react'
// import {useState,useEffect} from 'react'
// import Plot from 'react-plotly.js'
// import './Chart.css'

// function BarChart() {

//     const [data,setData]=useState([])
//     const barChartData=async()=>{
//         try{
//           const res=await fetch("https://data.covid19india.org/data.json");
//           const actualData=await res.json();
//            console.log(actualData.statewise)
//           setData(actualData.statewise)
//         }
//         catch(err){
//           console.log(err)
//         }
//       }
      
//   useEffect(()=>{
//     barChartData();
//   },[]);

// transformData((data)=>{
//     let plot_data=[];
//     let x=[];
//     let y=[];

//     data.map((each)=>{
//         x.push(ease.actve)
//         y.push(ease.deaths)
//     })
//     plot_data['x']=x;
//     plot_data['y']=y;

//     return plot_data;
// }

//     return (
//         <div className="chart">
//             <h1>Hi</h1>
//             <Plot 
//             data={[
//                 {type:'scatter',mode:'lines',
//                 x:this.transformData(this.state.data)['x'],
//                 y:is.transformData(this.state.data)['y'],
//                 marker:{color:blue}},]}
//                 layout={{width:1000,height:500,title:'covd case'}}
//                 />
//         </div>
//     )
// }
// export default BarChart
