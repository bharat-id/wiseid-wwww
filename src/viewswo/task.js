// main
import { Link, useHistory } from "react-router-dom";

import ContentFormatXW from "../content/webc/content-format-xw";
import WebbDividerMedium from "../content/webb/webb-divider-md";
import WebbDividerSmall from "../content/webb/webb-divider-sm";

import TaskSearchModule from "../content/task/task-search";
import TaskListModule from "../content/task/task-list";

export default function Task () {
  

  return(
    <>
      <ContentFormatXW 
        head='Jobs'
        link={``}
        form= 'full'
        data= {
          <>
           <div className="back-color-dark text-center">
            <WebbDividerMedium/>
            <WebbDividerMedium/>
            <TaskSearchModule />
           </div>
            
            <WebbDividerMedium />
            <WebbDividerMedium />
            <TaskListModule />
          

          </>
        } 
      />
    </>
  )
}