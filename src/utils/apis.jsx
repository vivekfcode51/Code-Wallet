export const baseUrlUsaWin = "https://sudhirtest.mobileappdemo.net";
export const configModalUsaWin = `${baseUrlUsaWin}/api/`

const apis = {

  // Auth api
  login: `${configModalUsaWin}login`,
  register: `${configModalUsaWin}register`,

  // Transaction_history
  Transaction_history: `${configModalUsaWin}Transaction_history`,

  // Profile api
  get_profile: `${configModalUsaWin}profile`,

  // deposit api
  deposit_request:`${configModalUsaWin}deposit_request`,


}

export default apis