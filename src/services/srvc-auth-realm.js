// init
import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_MNDB_RELM_USER });

// realm-auth
export const AuthWebbUser = async () => {

  const credentials = Realm.Credentials.apiKey(process.env.REACT_APP_MNDB_AUTH_USER);
  const user = await app.logIn(credentials);
  return user

}