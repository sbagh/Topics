// import requirements
import fetch from "node-fetch";
const POSTGRID_STANDARD_URL = "https://api.postgrid.com/v1/addver";
const POSTGRID_INTL_URL = "https://api.postgrid.com/v1/intl_addver";
const API_KEY = "live_sk_h8sH14BU4RsLnQUzzxjofu";

// get lookup info (how many lookups you have used so far)
const getLookups = async () => {
   const requestOptions = {
      method: "GET",
      headers: {
         "x-api-key": API_KEY,
      },
   };
   const response = await fetch(POSTGRID_STANDARD_URL, requestOptions);
   return await response.json();
};

getLookups().then((data) => console.log(data));
