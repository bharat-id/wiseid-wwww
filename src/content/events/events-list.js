// main
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
      {console.log(data)}
      <div className='text-center'>
        
      <div className="container text-center mb-3">
        {/* options */}
        <div className="row row-cols-2 row-cols-md-4 g-4">
        {data && data.map((item, i) => (
          <div className="col" key={i}>
            
              <div className="card h-100 border-none">
              <Link to={`/e/${item.enid}`}>
              <div className="">
                <img src={item.link} className="img-fluid w-100 rounded-wd shadow" alt="..."></img>
              </div>
              </Link>
              <div className="card-body m-0">
                <p className='mb-2'>{item.stts}</p>
                <h5 className="fw-bold lead text-color-main text-md">{item.name}</h5>
                
              </div>
            </div>
            
            
            

          </div>
        ))}
        </div>
      </div>
        <WebbDividerMedium />
        <WebbDividerMedium />
      </div>

      
    </>
  );

}