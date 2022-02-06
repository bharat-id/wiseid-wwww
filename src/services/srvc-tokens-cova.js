// init
import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_MNDB_RELM_DATA });

// realm-auth
export const AuthDataUser = async () => {

  const credentials = Realm.Credentials.apiKey(process.env.REACT_APP_MNDB_AUTH_DATA);
  const user = await app.logIn(credentials);
  return user

}

export const GetContractTokens = async (item) => {
  
  const user = await AuthDataUser()
  const result = await user.functions.covaGetNFTContractTokenList(JSON.stringify(item));    
  return JSON.parse(result);
}

export const GetUserTokens = async (item) => {
  
  const user = await AuthDataUser()
  const result = await user.functions.covaGetNFTUserTokenList(JSON.stringify(item));
  return JSON.parse(result);
}

export const GetTokensInfo = async (item) => {
  
  const user = await AuthDataUser()
  const result = await user.functions.covaGetNFTTokenInfo(JSON.stringify(item));  
  return JSON.parse(result);
}


// JSON.stringify({data:{chain: '80001', contract: '0x74868061d24673Bfa85C1cb9ac2657d6a6e99ac6',owner: '0xbC1c628bfDc9156e11b2525fc19D64A9AFE8895c',  auth:'ckey_83403b63b0f6487dbb3cabc7ebc'}}))