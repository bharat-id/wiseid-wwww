// webb header links
import { Link } from "react-router-dom";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { ActiveLink } from '../../services/srvc-utilities';

const list = (require("../../data/navs-header-main.json")).data;

export default function NavsHeaderMain() {

  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  const data = list.filter(item => item.user.includes(asset.form) );
  
  return (
  <>
    <nav className="nav justify-content-start">
      {data && data.map((item, i) => ( item.actv ?
      
        <Link to={`/${UserForm()}/${item.link}`} key={i}
          className={`nav-link m-0 py-1 px-1 mx-2 rounded hilite
            ${item.link === ActiveLink() 
            ? 'text-primary' 
            : 'text-tone'}`}>
          {item.name}
        </Link>
        
      
      :''))}
    </nav>

  </>
  )
}