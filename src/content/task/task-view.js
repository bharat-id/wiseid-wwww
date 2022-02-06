// main
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Web3 from 'web3';

import WebbDividerMedium from '../webb/webb-divider-md';
import WebbDividerSmall from '../webb/webb-divider-sm';
import FormNeeded from '../webb/form-needed';

import { GetTaskInfo } from '../../services/srvc-services-realm';
import { TaskAddUser } from '../../services/srvc-user-realm';


export default function TaskViewModule() {
  
  const asset = "ww"
  const {id} = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(true)
  const [text, setText] = useState('');
  const [info, setInfo] = useState({});

  useEffect( () => {
    if (asset){
      const fetchData = async() => {
        setLoading(true);
        const datx = {
          data: { enid: id },
          user: "",
          webb: process.env.REACT_APP_WEBB_SITE_NMBR
        }

        const result = (await GetTaskInfo(datx))
        setInfo(result.data)
        setLoading(false);
      }
      fetchData()
    } else {}
  },[asset]);

  const [data, setData]=useState({
    name: '',
    emid: '',
    amnt: ''
  })

  const handleChange = async(key, val) => {
    setData({ ...data, [key]: val });
  }

  const handleSubmit = async () => {

    if (window.ethereum) {
      // alert ('Metamask OK')
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      console.log(account)
      const chainId = await window.ethereum.request({method: 'eth_chainId',});
      console.log(chainId)

      const text = `Apply for Job: ${info.name}. Settle DAO`
      const txtm = `0x${Buffer.from(text, 'utf8').toString('hex')}`;
      const esin = await window.ethereum.request({
        method: 'personal_sign',
        params: [txtm, account, 'Example password'],
      });
      
      console.log(esin)

      setLoading(true)
      if (esin) {
        
        const result = await TaskAddUser({
          data: { enid: id, user: account, ...data },
          user: '',
          webb: ''
        })
        console.log (result)
        if (result.data) {
          alert ('Success: Profile Submitted')
          history.push('/w')
        } 
        else alert ('Error: Please Try Again')

        setLoading(false)

      }

    }
    else {
      alert ('Please Install Metamask and Create Web3 Account')
    }
  }
    
  if (loading) return ( 
    <>
      <WebbDividerMedium />
      <p className="lead text-center text-color-tone">
        <i className="caption-md bi-briefcase"></i>
      </p>
      <p className="lead text-center text-color-tone">Loading Experience</p>
      <p className="text-center text-color-tone">{id}</p>
    </>
  );

  return (
    <>
      {console.log (info)}
      <WebbDividerSmall />
      <div className='text-center'>
        
        <div className="container">
          <div className="row">
            <div className="col-3 d-none d-md-block"></div>
            <div className="col">
              <img src={info.link} className='img-fluid rounded-wd mb-3' alt={info.name}></img>
              <WebbDividerSmall />

              <h5 className='text-color-main caption-sm'>{info.name}</h5>
              <p className=''>{info.memo}</p>
              <WebbDividerSmall />
              <WebbDividerSmall />
              
              <hr></hr>

              <div className={`form-group mb-3 ${data.form !=='' && data.sort !=='' ? '' : 'd-none'}`}>
                <label className="form-label small">Your Name  <FormNeeded /></label>
                <input type="text" 
                  className="form-control height-md text-center" 
                  style={{fontSize:'0.9rem', height:'2.7rem'}}
                  value={data.name}
                  onChange={({ target }) => {handleChange("name", target.value); setText('');}}
                  placeholder="">
                </input>
              </div>

              <div className={`form-group mb-3 ${data.form !=='' && data.sort !=='' ? '' : 'd-none'}`}>
                <label className="form-label small">Your Email  <FormNeeded /></label>
                <input type="text" 
                  className="form-control height-md text-center" 
                  style={{fontSize:'0.9rem', height:'2.7rem'}}
                  value={data.emid}
                  onChange={({ target }) => {handleChange("emid", target.value); setText('');}}
                  placeholder="">
                </input>
              </div>

              <div className={`form-group mb-3 ${data.form !=='' && data.sort !=='' ? '' : 'd-none'}`}>
                <label className="form-label small">Job Amount  <FormNeeded /></label>
                <input type="text" 
                  className="form-control height-md text-center" 
                  style={{fontSize:'0.9rem', height:'2.7rem'}}
                  value={data.amnt}
                  onChange={({ target }) => {handleChange("amnt", target.value); setText('');}}
                  placeholder="">
                </input>
              </div>


              <WebbDividerSmall />
              <WebbDividerSmall />
              
              <button className='btn btn-primary back-color-main px-3 rounded-pill'
                onClick={() => handleSubmit()}
              
              >Apply to Job</button>

              <WebbDividerMedium />
              <p className="text-center text-color-tone small text-truncate">{id}</p>
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