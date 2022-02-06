// main

import WebbDividerMedium from "../webb/webb-divider-md";


export default function MainIntroModule() {
  

    
  return (
    <>
      <div className="text-center">
        <WebbDividerMedium/>
        <WebbDividerMedium/>

        <div className="container mb-3" >
          <p className="caption-xl fw-bold text-info">
            The Freedom to Manage your Identity
          </p>
        </div>    

        <div className="container text-white mb-3">
          <div className="row">
            <div className="col-1" ></div>
            <div className="col" >
            <p className="caption-md">
              <strong>WiseID</strong> is the NFT approach to digital identity 
              that gives individuals control of their digital identities.
            </p>
            </div>

            <div className="col-1"></div>
          </div>    

        </div>

        <WebbDividerMedium/>

        
      </div>
      
    </>
  );

}