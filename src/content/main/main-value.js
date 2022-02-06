// main
import WebbDividerSmall from "../webb/webb-divider-sm";

const list = (require("../../data/data-tokens-formats.json")).data;

export default function MainValueModule() {
  
  const data = (list.filter(item => item.actv));
  const sort = [""] // [...new Set(data.map(item=>item.sort))];

  return (
    <>

      <div className="container text-main mb-3">
        <div className="row">
          <div className="col-1" ></div>
          <div className="col" >
          <p className="caption-md text-center">
            <strong>WiseID is an enabler and creates opportunity for everyone</strong> 
            in the fast everchaging modern digital world. 
            WiseID NFT Collectibles and Smart Contracts on Blockchain,
            provide the <strong className="text-color-main">trust, transparency and 
            instant verifiability </strong> across multiple domains. 
          </p>
          </div>

          <div className="col-1"></div>
        </div>    

      </div>

      <WebbDividerSmall />
      
      <div className="container text-center mb-3">
        {/* options */}
        <div className="row row-cols-2 row-cols-md-3 g-4">
        {data && data.map((item, i) => (
          <div class="col">
            <div class="card h-100 border-none">
              <div className="">
                <img src={item.avtr} class="img-fluid w-100 rounded-wd" alt="..."></img>
              </div>
              
              <div class="card-body m-0">
                <h5 class="card-title fw-bold caption-sm text-color-main">{item.name}</h5>
                <div className="d-none d-md-block">
                  <p class="lead text-md">{item.text}</p>
                </div>
                <div className="d-md-none">
                  <p class="card-text text-md small">{item.text}</p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      
    </>
  );

}