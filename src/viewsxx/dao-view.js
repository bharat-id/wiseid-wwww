// user
import ContentFormatXZ from "../content/webc/content-format-xz";

import WebbDividerMedium from "../content/webb/webb-divider-md";

import UserViewHeadModule from "../content/users/user-view-head";

export default function DaoView () {
  

  return(
    <>
      <ContentFormatXZ 
        head='User Web3 Social Profile'
        link={``}
        form= 'full'
        data= {
          <>
            <UserViewHeadModule />
            <WebbDividerMedium />
            

          </>
        } 
      />
    </>
  )
}