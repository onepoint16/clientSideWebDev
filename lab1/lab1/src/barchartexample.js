import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarChartExample extends Component { render() {
    return (
        <div>
            <h6>Bar Chart</h6> 
            <Bar data={data} options={options}/>
        </div> );   
    } 
}
export default BarChartExample;     

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], 
    datasets: [
        {
        label: 'Basic Chart',
        backgroundColor: 'rgba(255,99,132,0.2)', borderColor: 'rgba(255,99,132,1)', borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)', hoverBorderColor: 'rgba(255,99,132,1)', data: [65, 59, 80, 81, 56, 55, 40,0]
        }
    ]
}; 

const options = {
    indexAxis: 'y',
// Elements options apply to all of the options unless overridden in a data set
// In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
    }, title: {
        display: true,
  text: 'Horizontal Bar Chart', },
  }, };

