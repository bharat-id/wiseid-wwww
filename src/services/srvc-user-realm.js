// init
import { AuthWebbUser } from "./srvc-auth-realm";


export const GetWeb3AccountInfo = async (item) => {
  
  const user = await AuthWebbUser()
  const result = await user.functions.userGetWeb3AccountInfo(JSON.stringify(item));
  
  return JSON.parse(result);

}


export const EventAddUser = async (item) => {
  
  const user = await AuthWebbUser()
  const result = await user.functions.evntAddUser(JSON.stringify(item));
  
  return JSON.parse(result);

}


export const TaskAddUser = async (item) => {
  
  const user = await AuthWebbUser()
  const result = await user.functions.taskAddUser(JSON.stringify(item));
  
  return JSON.parse(result);

}