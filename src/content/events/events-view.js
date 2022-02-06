// main
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import WebbDividerMedium from '../webb/webb-divider-md';

export default function EventsViewModule() {
  
  const {id} = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(true)
  const [text, setText] = useState('');

  const [data, setData]=useState({
    item: 'docx',
    nmbr: ''
  })

  const handleChange = async(key, val) => {
    setData({ ...data, [key]: val });
  }

  const handleSubmit = async () => {
    // alert('Your Search' + data.nmbr)
    if (data.nmbr && data.nmbr !=='')
      history.push(`/u/${data.nmbr}`)
    else alert('Enter User Account Address')
  }
    
  if (loading) return ( 
    <>
      <WebbDividerMedium />
      <p className="lead text-center text-color-tone">
        <i className="caption-md bi-calendar"></i>
      </p>
      <p className="lead text-center text-color-tone">Loading Experience</p>
      <p className="text-center text-color-tone">{id}</p>
    </>
  );

  return (
    <>


      <div className='text-center'>
        
        <div className="container">
          <div className="row">
            <div className="col-3 d-none d-md-block"></div>
            <div className="col">
              <p className="text-center text-color-tone">{id}</p>
            </div>
            <div className="col-3 d-none d-md-block"></div>
          </div> 
        </div>
 

        <WebbDividerMedium />
        <WebbDividerMedium />
      </div>

      
    </>
  );

}