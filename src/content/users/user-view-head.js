// user
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Blockies from "react-blockies";

import avtx from '../../media/user.png'

// import { GetWeb3AccountInfo } from "../../services/srvc-user-realm";

const list = require('../../data/data-user-head.json').data

export default function UserViewHeadModule() {
  
  const {id} = useParams();

  const [user, setUser] = useState({name:''})
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    if (id){
      const fetchData = async() => {

        // const usrx = await GetWeb3AccountInfo({ 
        //   data: { user: id },
        //   user: '',
        //   webb: process.env.REACT_APP_WEBB_SITE_NMBR
        // })
        
        // if (usrx.data)  setUser(usrx.data)
        // else setUser({name: id})
        setLoading(false)

      }
      fetchData()
    } else {}
  },[id]);
    
  return (
    <>
      <div className="d-none d-md-block">
        <div className="media-head-md mb-2">
          <img src={list[0].wall} className="banner" alt={'...'}></img>
          <Blockies seed={id || 'WiseID'} className="avatar identicon rounded-circle m-0" size={20} />
          
          <h1 className="name caption-md fw-bold">{id.toLowerCase()}</h1>
          <p className="account lead fw-bold "></p>
          <button className="btn btn-info rounded-pill px-4"><small>Connect</small></button>
        </div>
      </div>

      <div className="d-md-none">
      <div className="media-head-sm mb-2">
          <img src={list[0].wall} className="banner" alt={'...'}></img>
          <Blockies seed={id || 'WiseID'} className="avatar identicon rounded-circle m-0" size={15} />
          
          <h1 className="name caption-md fw-bold" ></h1>
          <p className="fw-bold account">{id.toLowerCase()}</p>
          <button className="btn btn-info rounded-pill px-4"><small>Connect</small></button>
        </div>
      </div>
      
    </>
  );

}

// <img src={avtx} className="avatar rounded-circle" width={96} height={96} alt="..."></img>