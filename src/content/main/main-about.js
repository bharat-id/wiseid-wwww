// main

import WebbDividerMedium from "../webb/webb-divider-md";

export default function MainAboutModule() {
  
    
  return (
    <>

      <div className="bg-lite">
        <WebbDividerMedium/>
        <WebbDividerMedium/>
        <div className="container text-main mb-3">
          <div className="row">
            <div className="col-1" ></div>
            <div className="col" >
            <p className="caption-lg text-center fw-bold">
              Buidl Trust in Decentralized Communities
            </p>
            <p className="caption-md text-center">
              Create Ownership and Value for People
            </p>
            </div>

            <div className="col-1"></div>
          </div>    

        </div>

        <WebbDividerMedium/>
        <div className="container text-main mb-3">
          <div className="row">
            <div className="col-1" ></div>
            <div className="col" >
            <p className="lead">
              WiseID addresses the difficulty of establishing trust in an online digital interaction. 
              In order to be trusted, one party in an interaction will present credentials to the other parties, 
              and those relying parties can verify that the credentials came from an issuer that they trust. 
              In this way, the verifier's trust in the issuer is transferred to the credential holder. 
              This basic structure of SSI with three participants is sometimes called "The Trust Triangle".
            </p>
            </div>

            <div className="col-1"></div>
          </div>    

        </div>

        <WebbDividerMedium/>
        <WebbDividerMedium/>
      </div>
      
    </>
  );

}