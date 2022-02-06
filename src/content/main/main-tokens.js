// main
import WebbDividerMedium from "../webb/webb-divider-md";
import WebbDividerSmall from "../webb/webb-divider-sm";

import credwork from '../../media/cred-intern.png';
import credacad from '../../media/cred-academic.png';
import credtick from '../../media/cred-ticket.png';
import credawrd from '../../media/cred-award.png';

export default function MainTokensModule() {
  
  const data = [
    {avtr: credwork, form: 'Work'}, 
    {avtr: credacad, form: 'Academic'}, 
    {avtr: credawrd, form: 'Awards'}, 
    {avtr: credtick, form: 'Attendance'}, 
  ]
  ;
  const sort = [""] // [...new Set(data.map(item=>item.sort))];

  return (
    <>
      <WebbDividerMedium />
      <WebbDividerMedium />
      <div className="container text-main mb-3">
        <div className="row">
          <div className="col-1" ></div>
          <div className="col" >
          <p className="caption-md text-center fw-bold">
            Build your Personal, Professional and Web3 Social Profile
          </p>
          </div>

          <div className="col-1"></div>
        </div>    

      </div>

      <WebbDividerSmall />
      
      <div className="container text-center mb-3">
        {/* options */}
        <div className="row row-cols-2 row-cols-md-4 g-4">
        {data && data.map((item, i) => (
          <div class="col">
            <div class="card h-100 border-none">
              <div className="">
                <img src={item.avtr} class="img-fluid w-100 rounded-wd shadow" alt="..."></img>
              </div>
              <div class="card-body m-0">
                <h5 class="card-title fw-bold caption-sm text-color-main">{item.form}</h5>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      
    </>
  );

}