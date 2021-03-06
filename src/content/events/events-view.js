// main
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Web3 from 'web3';

import WebbDividerMedium from '../webb/webb-divider-md';
import WebbDividerSmall from '../webb/webb-divider-sm';

import { GetEventsInfo } from '../../services/srvc-services-realm';
import { EventAddUser } from '../../services/srvc-user-realm';
import { MintEventToken } from '../../services/srvc-tokens-nft';

export default function EventsViewModule() {
  
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

        const result = (await GetEventsInfo(datx))
        setInfo(result.data)
        setLoading(false);
      }
      fetchData()
    } else {}
  },[asset]);

  const [data, setData]=useState({
    item: 'docx',
    nmbr: ''
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

      const text = `Regsiter for Event: ${info.name}. Settle DAO`
      const txtm = `0x${Buffer.from(text, 'utf8').toString('hex')}`;
      const esin = await window.ethereum.request({
        method: 'personal_sign',
        params: [txtm, account, 'Example password'],
      });
      
      console.log(esin)

      const tokenid = info.nmbr.substring(0,2) + Date.now() + 6
      setLoading(true)
      if (esin) {
        const result = await MintEventToken ({
          cred: account,
          name: info.name,
          memo: info.memo,
          link: info.link,
          nmbr: info.enid,
          tokenid: tokenid,
          stts: info.stts,
          ents: info.stts,
          ists: (new Date()).toISOString().substring(0,10),
          form: info.form,
          sort: info.sort,
        })

        if (result.data) {
          const xxxx = await EventAddUser({
            data: {enid: id, user: account}
          })
          alert ('Registration Success')
        } 
        else alert ('Registration Failed')

        setLoading(false)
        history.push('/e')
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
        <i className="caption-md bi-calendar"></i>
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
              
              <button className='btn btn-primary back-color-main px-3 rounded-pill'
                onClick={() => handleSubmit()}
              
              >Register</button>

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