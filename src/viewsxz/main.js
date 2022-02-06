// main
import { Link, useHistory } from "react-router-dom";

import ContentFormatXW from "../content/webc/content-format-xw";
import WebbDividerMedium from "../content/webb/webb-divider-md";
import WebbDividerSmall from "../content/webb/webb-divider-sm";

import MainIntroModule from "../content/main/main-intro";
import MainSearchModule from "../content/main/main-search";

import MainValueModule from "../content/main/main-value";
import MainAboutModule from "../content/main/main-about";
import MainTokensModule from "../content/main/main-tokens";

import MainAwardsModule from "../content/main/main-awards";

export default function Main () {
  

  return(
    <>
      <ContentFormatXW 
        head='WiseID'
        link={``}
        form= 'full'
        data= {
          <>
            <div className="back-color-dark text-center"
              style={{backgroundImage:"url('https://image.freepik.com/free-photo/technology-digital-wave-background_34629-925.jpg?w=360 360w, https://image.freepik.com/free-photo/technology-digital-wave-background_34629-925.jpg?w=740 740w, https://image.freepik.com/free-photo/technology-digital-wave-background_34629-925.jpg?w=826 826w, https://image.freepik.com/free-photo/technology-digital-wave-background_34629-925.jpg?w=900 900w, https://image.freepik.com/free-photo/technology-digital-wave-background_34629-925.jpg?w=996 996w, https://image.freepik.com/free-photo/technology-digital-wave-background_34629-925.jpg?w=1060 1060w, https://image.freepik.com/free-photo/technology-digital-wave-background_34629-925.jpg?w=1380 1380w, https://image.freepik.com/free-photo/technology-digital-wave-background_34629-925.jpg?w=1480 1480w, https://image.freepik.com/free-photo/technology-digital-wave-background_34629-925.jpg?w=1800 1800w, https://image.freepik.com/free-photo/technology-digital-wave-background_34629-925.jpg?w=2000 2000w)"}}>

              <MainIntroModule />
              <MainSearchModule />
            </div>

            <MainTokensModule />

            <WebbDividerMedium />
            <WebbDividerMedium />
            <WebbDividerMedium />
            <MainValueModule/>

            <WebbDividerMedium />
            <WebbDividerMedium />
            <MainAboutModule />


          </>
        } 
      />
    </>
  )
}