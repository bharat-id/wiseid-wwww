// main
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import WebbDividerMedium from '../webb/webb-divider-md';

export default function MainSearchModule() {
  
  const history = useHistory();

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
    
  return (
    <>
   
      <div className='text-center'>
        
        <div className="container">
          <div className="row">
            <div className="col-3 d-none d-md-block"></div>
            <div className="col">

              <div className="input-group mb-3">
                <input 
                  type="search" 
                  className="form-control height-md border-none" 
                  style={{height:'3.3rem', fontSize:'1rem', fontWeight:'bold'}}
                  value={data.nmbr}
                  onChange={({ target }) => {handleChange("nmbr", target.value); setText('');}}
                  placeholder="Search by Wallet or Account Address" 
                  aria-label="Transaction Reference" 
                  aria-describedby="button-addon2">  
                </input>
                <button 
                  className="btn btn-info px-4 border-none" 
                  style={{color:'white'}}
                  type="button" 
                  onClick={()=>{handleSubmit()}}
                ><small>Search</small></button>
              </div>

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