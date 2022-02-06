// main
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import WebbDividerMedium from '../webb/webb-divider-md';

import { GetEventsList } from '../../services/srvc-services-realm';

export default function EventsListModule() {
  
  const asset = "ww"
  const history = useHistory();

  const [loading, setLoading] = useState(true)

  const [data, setData] = useState([])

  useEffect( () => {
    if (asset){
      const fetchData = async() => {
        setLoading(true);
        const datx = {
          data: { stts: "", ents: "" },
          user: "",
          webb: process.env.REACT_APP_WEBB_SITE_NMBR
        }

        const result = (await GetEventsList(datx))
        setData(result.data)
        setLoading(false);
      }
      fetchData()
    } else {}
  },[asset]);
  

  if (loading) return ( 
    <>
      <WebbDividerMedium />
      <p className="lead text-center text-color-tone">Loading Your Experience</p>
    </>
  );

  if (data.length===0) return ( 
    <>
      <WebbDividerMedium />
      <p className="lead text-center text-color-tone" style={{fontSize:'1.5rem'}}>
        <i className="caption-md bi-calendar-check"></i>
      </p>
      <p className="lead text-center text-color-tone m-0">
        No Events Scheduled. 
      </p>
      <p className="lead text-center text-color-tone m-0">
        Please check back shortly. 
      </p>
    </>
  );


  return (
    <>
   
      <div className='text-center'>
        

        <WebbDividerMedium />
        <WebbDividerMedium />
      </div>

      
    </>
  );

}