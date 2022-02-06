// main
import { Link, useHistory } from "react-router-dom";

import ContentFormatXW from "../content/webc/content-format-xw";
import WebbDividerMedium from "../content/webb/webb-divider-md";
import WebbDividerSmall from "../content/webb/webb-divider-sm";

import EventsViewModule from "../content/events/events-view";

export default function EventsView () {
  

  return(
    <>
      <ContentFormatXW 
        head='Events'
        link={``}
        form= 'full'
        data= {
          <>

            <EventsViewModule />
            


          </>
        } 
      />
    </>
  )
}