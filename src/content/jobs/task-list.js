// main
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import WebbDividerMedium from '../webb/webb-divider-md';

import { GetTaskList } from '../../services/srvc-services-realm';

export default function TaskListModule() {
  
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

        const result = (await GetTaskList(datx))
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
        <i className="caption-md bi-briefcase"></i>
      </p>
      <p className="lead text-center text-color-tone m-0">
        No Jobs Posted. 
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