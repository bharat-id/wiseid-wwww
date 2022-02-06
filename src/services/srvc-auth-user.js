import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_MNDB_RELM_USER });


export const AuthClearStore = async() => {
  // logout current user
  // reset local storage
  localStorage.clear();
  localStorage.setItem("auth",null);
  localStorage.setItem("user",null);
  localStorage.setItem("bsnx",null);
  localStorage.setItem("usne",null);
  localStorage.setItem("bsne",null);
  //console.log('user', app.currentUser)
  //redirect user to homepage
  //window.location.href='/';
}

export const SetAuthUser=(asset)=>{
  localStorage.setItem('auth', JSON.stringify(asset));
}

export const GetAuthUser=()=>{
  return JSON.parse(localStorage.getItem("auth"));
}

export const SetLocalUser=(asset)=>{
  localStorage.setItem('usrx', JSON.stringify(asset));
}
  
export const GetLocalUser=()=>{
  return JSON.parse(localStorage.getItem("usrx"));
}

export const SetLocalBusiness=(asset)=>{
  localStorage.setItem('bsnx', JSON.stringify(asset));
}

export const GetLocalBusiness=()=>{
  return JSON.parse(localStorage.getItem("bsnx"));
}

export const SetNewUser=(asset)=>{
  localStorage.setItem('usne', JSON.stringify(asset));
}

export const GetNewUser=()=>{
  return JSON.parse(localStorage.getItem("usne"));
}

export const SetNewBusiness=(asset)=>{
  localStorage.setItem('bzne', JSON.stringify(asset));
}

export const GetNewBusiness=()=>{
  return JSON.parse(localStorage.getItem("bzne"));
}