// init
// init
import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_MNDB_RELM_USER });

// realm-auth
export const AuthServicesUser = async () => {

  const credentials = Realm.Credentials.apiKey(process.env.REACT_APP_MNDB_AUTH_USER);
  const user = await app.logIn(credentials);
  return user

}


export const GetEventsList = async (item) => {
  
  const user = await AuthServicesUser()
  const result = await user.functions.evntGetActiveList(JSON.stringify(item));
  return JSON.parse(result);
}

export const GetEventsInfo = async (item) => {
  
  const user = await AuthServicesUser()
  const result = await user.functions.evntGetEventInfo(JSON.stringify(item));
  return JSON.parse(result);
}


export const GetTaskList = async (item) => {
  
  const user = await AuthServicesUser()
  const result = await user.functions.taskGetActiveList(JSON.stringify(item));
  return JSON.parse(result);
}

export const GetTaskInfo = async (item) => {
  
  const user = await AuthServicesUser()
  const result = await user.functions.taskGetTaskInfo(JSON.stringify(item));
  return JSON.parse(result);
}
