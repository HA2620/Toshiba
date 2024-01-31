import { Chart as Chartjs } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)


export const GrowthCard = (
    {Gdata}
) => {
    const options = {
        plugins:{
            legend:false
        },
    }
 
    return <div className="py-6 bg-white mt-3 rounded-xl">
        <div className="flex justify-between px-6 " >
            <div className="text-xl font-semibold leading-10 tracking-tight " >Growth</div>
            <div className="flex items-center" >
                <div className="text-gray-500 pr-1 text-[14px]" >Quaterly</div>
                <div>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.861633L4 4.36163L7.5 0.861633" stroke="#7D7D7D" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
        <div style={{
            width:'492px',
            height:'140px',
            paddingLeft:'20px'
        }} >
            { (Gdata) ? <Line data={Gdata} options={options} /> : <div>Graph is loading</div> }
            
        </div>
    </div>
}