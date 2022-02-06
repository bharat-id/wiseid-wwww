// main
import { Link, useHistory } from "react-router-dom";

import ContentFormatXW from "../content/webc/content-format-xw";
import WebbDividerMedium from "../content/webb/webb-divider-md";
import WebbDividerSmall from "../content/webb/webb-divider-sm";

import TaskViewModule from "../content/task/task-view";

export default function TaskView () {
  

  return(
    <>
      <ContentFormatXW 
        head='Jobs'
        link={``}
        form= 'full'
        data= {
          <>
            <TaskViewModule />
            


          </>
        } 
      />
    </>
  )
}