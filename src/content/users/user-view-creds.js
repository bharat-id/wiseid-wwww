// user
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import WebbDividerMedium from "../webb/webb-divider-md";

import { GetUserTokens } from "../../services/srvc-tokens-cova";


export default function UserViewCredsModule() {
  
  const {id} = useParams();

  const [loading, setLoading] = useState(true)

  const [cred, setCred] = useState([])
  const [data, setData] = useState([])

  useEffect( () => {
    if (id){
      const fetchData = async() => {

        const crdx = await GetUserTokens({
          data: {
            user: id, 
            contract: '0x74868061d24673Bfa85C1cb9ac2657d6a6e99ac6',
            chain: '80001',
            auth: 'ckey_83403b63b0f6487dbb3cabc7ebc'
          }, 
          user:'', 
          webb:''
        })
        // console.log(crdx)
        setCred(crdx.data)
        setData(crdx.data)
        setLoading(false)

      }
      fetchData()
    } else {}
  },[id]);


  if (loading) return ( 
    <>
      <WebbDividerMedium />
      <p className="lead text-center text-color-tone">Loading your Web3 Social Profile</p>
    </>
  );

  if (data.length===0) return ( 
    <>
      <WebbDividerMedium />
      <p className="lead text-center text-color-tone">
        <i className="caption-md bi-gem"></i>
      </p>
      <p className="lead text-center text-color-tone">
        Unable to find WiseID Tokens for this account. 
      </p>
      <p className="lead text-center text-color-tone">
        Please request from your DAO / Web2 Organizations. 
      </p>
    </>
  );

  return (
    <>
      <div className="py-3"></div>
      <div className="container">
        <h1 className="caption-md text-color-main text-center">Personal, Professional & Web3 Social Profile</h1>
        <WebbDividerMedium />
        <WebbDividerMedium />

        <div className="row row-cols-2 row-cols-md-4">
          {data && data.length>0 && data.map((item, i) => (
            <div className="col mb-3" key={i}>
            
              <a href={item.link} target={'_blank'} >
                <div className="media-square rounded-wd shadow">
                  <img src={item.image_256} className="rounded-wd img-fluid" alt='...'></img>
                </div>
              </a>
              <div className="pt-3">
                <h1 className="fw-bold text-primary m-0 d-none">{item.name}</h1>
                <p className="m-0">ID: {item.tokenid}</p>
                <p className="m-0">Issuer: </p>
                
              </div>
            </div>
          ))}    
        </div>


      </div>

      <div className="py-3"></div>
      <div className="py-3"></div>
      <div className="py-3"></div>

    </>
  );

}