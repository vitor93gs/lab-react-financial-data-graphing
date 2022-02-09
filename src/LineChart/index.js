import {Chart} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );



export function LineChart(props){
    
    
    const objData = props.lbls
    return(
       
    <Chart
        type="line"
        data={ {
            datasets: [{
                data: objData,           
            }]
            
        }}
        height={110}
        width={300}
        options={{
            maintainAspectRatio: true,
        }}
    />
    )
}