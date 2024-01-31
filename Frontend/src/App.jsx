import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import axios from "axios"
import { PercentCard } from './components/percentCard'
import { Sidebar } from './components/Sidebar'
import { CustomerCard } from './components/CustomersCard'
import { GrowthCard } from './components/growthCard'
// import { GrowthCard } from './components/growthCard'
import {TopBuyer, TopMonth,TopYear } from './components/topCard'
import { ChatsCard } from './components/ChatsCard'
import { StateCard } from './components/StateCard'
import { NewDeals } from './components/NewDeals'
import { PercentSVGcard } from './components/PercentSVGcard'


function App() {

  const [graphDatas, setgraphData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/graph-data').then((res) => {

      setgraphData({
        labels: res.data.map((quater) => quater.quarter),
        datasets: [{         
          data: res.data.map((quater) => quater.averageProfitPercentage),
 
        }]
      })
      console.log(res.data)

    })
      .catch((err) => {
        setgraphData({
          labels: 0,
          datasets: [{
            data: 0
          }]
        })
        console.log("No Data to display")
      });
  }, []);

  return (
    <div className=" font-interF grid grid-cols-5 gap-4 p-4">
      <div className='col-span-1' >
        <div>
          <Sidebar userName={'Gustavo Xavier'} isAdmin={true} ></Sidebar>
        </div>
      </div>
      <div className='col-span-4'>
        <div className='grid grid-cols-8 gap-4' >
          <div className='col-span-3 '>
            <PercentCard title={'Revenues'} num={'15'} desc={'Increase compared to last week'} followLink={'Revenue report'} isIcon={true}> </PercentCard>
          </div>
          <div className='col-span-3'>
            <PercentCard title={'Lost Deals'} num={'4'} desc={'You closed 96 out of 100 deals'} followLink={'All Deals'}> </PercentCard>
          </div>
          <div className='col-span-2' >
            {/* <PercentCard title={'Revenues'} num={'15'} desc={'Increase compared to last week'} followLink={'Revenue report'}> </PercentCard> */}
            <PercentSVGcard title={'Quarter goal'} num={'84'} followLink={'All goals'}> </PercentSVGcard>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='col-span-1' >
            <CustomerCard></CustomerCard>
          </div>
          <div className='col-span-1 '>
            <div className >
              <div   >
                <GrowthCard Gdata={graphDatas}></GrowthCard>
              </div>
              <div className="mt-2" >
                <div className=' grid grid-cols-3 gap-4'>
                  <div className='col-span-1' ><TopMonth desc={'Top Month'} title={'November'} other={'2019'} ></TopMonth></div>
                  <div className='col-span-1' ><TopYear desc={'Top Year'} title={'2023'} other={'96K sold so far'}></TopYear></div>
                  <div className='col-span-1' ><TopBuyer desc={'Top Buyer'} name={'Maggie Johnson'} company={'Oasis Organic Inc.'}></TopBuyer></div>
                 
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-10 gap-2' >
          <div className='col-span-3' >
            <ChatsCard></ChatsCard>
          </div>
          <div className='col-span-3' >
            <StateCard></StateCard>
          </div>
          <div className='col-span-4' >
            <NewDeals></NewDeals>
          </div>
        </div>

      </div>
    </div>
  )
}


export default App

