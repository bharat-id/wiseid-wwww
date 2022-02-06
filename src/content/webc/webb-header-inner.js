// web navigation
import WebbIcon from '../webb/webb-icon';
import IconCancel from "../webb/icon-cancel";

export default function WebbHeaderInner(props) {

  const data = props.data;

  return (
    <>
    {/* header-large */}
      <div className="sticky-top border-bottom bg-lite">
        <div className="container-fluid d-flex justify-content-between"  >
        
          <div className="" style={{width:'3.3rem'}}>
            <div className="py-2"><WebbIcon /></div>
          </div>

          {/* center */}  
          <div className="py-3">
            <div className="text-center" style={{height:'1.4rem'}}>
              <h1 className=" text-color-main m-0 p-0">{data.head}</h1>
            </div>
          </div>
  
          <div className="text-end"  style={{width:'3.3rem'}}>
            <div className="py-2 mt-1"><IconCancel link={data.link}/></div>
          </div>

        </div>
      </div>
    </>
    )
}