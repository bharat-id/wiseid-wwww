import { useRouteMatch } from "react-router-dom";

export function ActiveLink (){
  let { path } = useRouteMatch();
  if ( path.slice(4).indexOf("/") >-1 ){
    return (path.slice(4).substr(0,path.slice(1).indexOf("/")))
  } else { 
    return (path.slice(4))
  }
}

export function ActiveSiteLink (){
  let { path } = useRouteMatch();
  if ( path.slice(1).indexOf("/") >-1 ){
    return (path.slice(1).substr(0,path.slice(1).indexOf("/")))
  } else { 
    return (path.slice(1))
  }
}

export function UserForm (){
  let { path } = useRouteMatch();
  return path.slice(1).substr(0,2).toLowerCase();
}

export function PageName (){
  let { path } = useRouteMatch();
  return path.slice(1).substr(0,1).toUpperCase() + path.slice(1).substring(1);
}

export function DateDDMMM (item){
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return (new Date(item)).toISOString().substr(8,2)+'-'+ month[parseInt((new Date(item)).toISOString().substr(6,2))]
}

export function TimeHHMM (item){
  return (new Date(item)).toISOString().substr(11,5)
}

export function moment (item){
  //const item = "2021-08-07T11:45:00.000Z";
  // console.log (item)
  const nwts = new Date();
  var dtmn = ((Date.parse(nwts) - Date.parse(item))/(1000*60))
  var dthr = (dtmn - (dtmn % 60))/60
  dtmn = Math.round(dtmn % 60)
  var mmnt='';

  switch (dthr) {
    case 0: mmnt = dtmn + ' mins ago'; break;
    case 1: mmnt = dthr + ' hr, ' + dtmn + ' mins ago'; break;
    case 2: mmnt = dthr + ' hrs, ' + dtmn + ' mins ago'; break;
    case 3: mmnt = dthr + ' hrs, ' + dtmn + ' mins ago'; break;
    case 4: mmnt = dthr + ' hrs, ' + dtmn + ' mins ago'; break;
    case 5: mmnt = dthr + ' hrs, ' + dtmn + ' mins ago'; break;
    case 6: mmnt = dthr + ' hrs, ' + dtmn + ' mins ago'; break;
    case 7: mmnt = dthr + ' hrs, ' + dtmn + ' mins ago'; break;
    case 8: mmnt = dthr + ' hrs, ' + dtmn + ' mins ago'; break;
    case 9: mmnt = dthr + ' hrs, ' + dtmn + ' mins ago'; break;
    case 10: mmnt = dthr + ' hrs, ' + dtmn + ' mins ago'; break;
    case 11: mmnt = dthr + ' hrs, ' + dtmn + ' mins ago'; break;
    default: mmnt = item && item.substr(0,10) + ', ' + item && item.substr(11,5)
  }
  return mmnt;
}

export function crnc (data, form){
  var data = Math.round(data*100)/100
	var nmbr = data.toString().split('.')[1] 
  ? data.toString().split('.')[1].length === 2
  	? data.toString()
    : data.toString()+'0'
  : data.toString()+'.00'
  
	nmbr = nmbr.toString().split('.')

  if (nmbr[0].length <= 3)   return nmbr.join('.')
  else {
  	var nmbx = nmbr[0].substr(0,nmbr[0].length-3) 
  	nmbx = form === "ww" 
    ? nmbx.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	  : nmbx.replace(/\B(?=(\d{2})+(?!\d))/g, ",")

    nmbr[0] = nmbx + ',' + nmbr[0].substr(nmbr[0].length-3,3)
    return nmbr.join('.')
  }
}

// base64
export const ftos = (file) => {
  const reader = new FileReader();
  var base64String =''
  reader.onloadend = () => {

    // use a regex to remove data url part
    base64String = reader.result
        .replace('data:', '')
        .replace(/^.+,/, '');
    // log to console
    // logs wL2dvYWwgbW9yZ...
    // console.log(base64String);
    
  };
  reader.readAsDataURL(file);
  return base64String
}

//PDF file to base64

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});