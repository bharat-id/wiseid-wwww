// init
import axios from "axios";

const auth = '75b57ebc-cd16-46d2-b63b-83b341eb56ee'
const chain = "polygon"
const contract = "0x2863903f37ec4a382235B65a60D2E7CC1EE783D1"

const base = "https://api.nftport.xyz"

export const IPFSMetadata = async (item) => {

  const url = base + "/v0/metadata";
  const head = {
    "Authorization": auth,
    "Content-Type": "application/json" 
  }

  const result = await axios.post(url, item, {headers: head})
  console.log (result.data)
  return result.data.metadata_uri

}

// realm-auth
export const MintEventToken = async (item) => {
  // create schema
  
  const metadata = {
    "name": `${item.name}`,
    "description": `${item.memo}`,
    "file_url": item.link,
    "external_url": item.link,
    "animation_url": item.link,
    "attributes": [
      { "trait_type": "form", "value": item.form }, 
      { "trait_type": "sort", "value": item.sort },
      { "trait_type": "number", "value": item.nmbr },
      { "trait_type": "startdate", "value": item.stts },
      { "trait_type": "enddate", "value": item.ents },
      { "trait_type": "issuedate", "value": item.ists },
      { "trait_type": "valid", "value": "" },
      { "trait_type": "transfer", "value": "x" },
    ]
  }

  // upload file to ipfs
  // can skip for this one

  // upload metadata to ipfs
  const metauri = await IPFSMetadata(metadata)
  console.log (metauri)

  // mint token
  const mint = {
    "chain": chain,
    "contract_address": contract,
    "metadata_uri": metauri,
    "mint_to_address": item.cred,
    "token_id": item.tokenid
  }
  console.log(mint)

  const url = base + "/v0/mints/customizable";
  const head = {
    "Authorization": auth,
    "Content-Type": "application/json" 
  }

  const result = await axios.post(url, mint, {headers: head})
  console.log (result.data)
  
  if (result.data.response === "OK") return {data: result.data.transaction_hash}
  else return {data: false}

  // update local-db ??
  

}