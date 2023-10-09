import axios from "axios";
import { useState, useEffect } from "react"

const App = () => {

  const url = "https://hodlinfo-api-zacp.onrender.com/"
  let [data, setData] = useState({})

  useEffect(() => {

     axios.get(url).then(
      (res) => { setData(res.data) }
    ).catch(e => console.log(e))

  }, [])

  console.log(data.average)
  const topResults = []
  const label = []
  for (let i = 0; i < 10 ; i++) {
    topResults[i] = data.records[i]
    label[i] = data.keys[i]
  }

  return (

    <div className="  bg-slate-950">
      <div className=" py-5 ">
        <div className=" sm:flex flex-row">
          <div className=" text-teal-500  text-center text-6xl sm:basis-1/3 sm:text-left pl-5 ">Hodlinfo</div>
          <div className=" text-white flex flex-row flex-wrap justify-around  text-1xl sm:basis-1/3">
            <div className=" bg-slate-700   border-gray-600 border-2 rounded-md my-4 px-3"><button>INR</button></div>
            <div className=" bg-slate-700 border-gray-600 border-2 rounded-md my-4 px-3"><button>BTC</button></div>
            <div className=" bg-slate-700 border-gray-600  border-2 rounded-md my-4 px-3"><button>Buy BTC</button></div>
          </div>
          <div className=" text-white text-center  sm:text-right pr-10 mt-2 basis-1/3 "><button
            className=" text-center bg-sky-500 text-2xl rounded-lg border-2 border-gray-600 ml-10 sm:pb-1 px-2 mt-1 text-1xl">Connect
            Telegram</button></div>
        </div>
      </div>


      <div className=" text-center font-bold ">
        <div className=" text-gray-800 text-1xl  sm:text-2xl py-1">Best Price to Trade</div>
        <div className=" text-white text-5xl  sm:text-7xl py-1">
          {data.average}
        </div>
        <div className=" text-gray-800 text-1xl sm:text-2xl py-2">Average BTC/INR net price including commission</div>
      </div>

      <div className=" overflow-x-auto border-2 border-sky-300 mt-7 ">
        <table className="text-sm break-keep  w-full sm:text-2xl sm:px-5  border-separate  border-spacing-y-1 border-spacing-x-1 ">
          <thead className="  ">
            <tr className=" bg-sky-950 text-white font-bold">
              <th>#</th>
              <th>Platform</th>
              <th>Last Traded Price</th>
              <th>Buy price</th>
               <th> Sell Price</th>
              <th>Difference</th>
              <th>Savings</th>
            </tr>
          </thead>

          <tbody className=" text-white text-center break-keep">
            {
              
              topResults.map((e,i)=>(
                
            <tr className=" my-3 bg-gray-900 border-1 ">
            <td>
              {i}
            </td>
            <td>
             {label[i]}
            </td>
            <td><span>&#8377;</span>
              {e.last}
            </td>
            <td><span>&#8377;</span>
              {e.buy} </td>
              <td> <span>&#8377;</span>
                {e.sell}
            </td>
            <td>
              {data.percentage[i]}
            </td>
            <td><span>&#8377;</span>
              {data.difference[i]}
            </td>
          </tr>
              ))

            }

          </tbody>

        </table>
      </div>

      <div className="mt-3">
        <div
          className="  py-2 border-t-2  flex-none border-gray-600 pr-5 text-gray-600 font-bold text-sm sm:flex flex-row">
          <div className=" text-center sm:basis-1/6 sm:break-keep">Copyright @ 2019</div>
          <div className=" text-center sm:basis-1/6 sm:text-left">Hodlinfo.com</div>
          <div className=" text-center sm:basis-4/6 sm:text-right sm:mr-5">Support</div>
        </div>
        <div className=" text-center py-3"><button
          className=" border-2 border-sky-400 py-2 px-2 rounded-md text-sm text-sky-400">Add Hodlinfo to Home
          Screen</button></div>
      </div>

    </div>

  )
}


export default App
