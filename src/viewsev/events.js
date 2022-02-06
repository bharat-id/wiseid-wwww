// main
import { Link, useHistory } from "react-router-dom";

import ContentFormatXW from "../content/webc/content-format-xw";
import WebbDividerMedium from "../content/webb/webb-divider-md";
import WebbDividerSmall from "../content/webb/webb-divider-sm";

import EventsSearchModule from "../content/events/events-search";
import EventsListModule from "../content/events/events-list";

export default function Events () {
  

  return(
    <>
      <ContentFormatXW 
        head='Events'
        link={``}
        form= 'full'
        data= {
          <>
           <div className="back-color-dark text-center">
            <WebbDividerMedium/>
            <WebbDividerMedium/>
            <EventsSearchModule />
           </div>
            
            <EventsListModule/>
            


          </>
        } 
      />
    </>
  )
}