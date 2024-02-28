const keyApi = '?x_cg_demo_api_key=CG-1gPdshkusGxUVFz37gHPppRY';
const baseURL = 'https://api.coingecko.com/api/v3/';

baseGetRequest = async ({ queryKey }) => {
  const [_, ep] = queryKey
  // console.log("url ---> ", `${baseURL}${ep}`)

  const res = await fetch(`${baseURL}${ep}`);
  return res.json();

}

export default baseGetRequest;
