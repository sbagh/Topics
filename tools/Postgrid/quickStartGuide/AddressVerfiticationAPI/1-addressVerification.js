// import requirements
import fetch from "node-fetch";
const POSTGRID_STANDARD_URL = "https://api.postgrid.com/v1/addver";
const POSTGRID_INTL_URL = "https://api.postgrid.com/v1/intl_addver";
const API_KEY = "live_sk_h8sH14BU4RsLnQUzzxjofu";

// test addresses used
const testAddress1 = {
   line1: "145 Mulberry St",
   city: "New York",
   provinceOrState: "NY",
   country: "US",
};
const testAddress2 = "47 Dietz Ave S, Waterloo, ON";
const testAddressInternational = {
   line1: "10 Downing St",
   city: "London",
   country: "GB",
};

//1- verify address
async function verifyAddress(address) {
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
   };
   const response = await fetch(
      POSTGRID_STANDARD_URL + "/verifications",
      requestOptions
   );
   return await response.json();
}

// verifyAddress(testAddress2).then((data) => {
//    console.log(data);
//    console.log(data.data.errors);
// });

// verify address with includeDetails and properCase options
async function verifyAddress2(address, includeDetails, properCase) {
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
   };
   const response = await fetch(
      POSTGRID_STANDARD_URL +
         `/verifications?includeDetails=${includeDetails}&properCase=${properCase}`,
      requestOptions
   );
   return await response.json();
}

// verifyAddress2(testAddress1, true, true).then((data) => {
//    console.log(data);
//    console.log(data.data.errors);
// });

// verify Addressss in batches
async function verifyAddressBatches(addresses, includeDetails, properCase) {
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ addresses }),
   };
   const response = await fetch(
      POSTGRID_STANDARD_URL +
         `/verifications/batch?includeDetails=${includeDetails}&properCase=${properCase}`,
      requestOptions
   );
   return await response.json();
}

// verifyAddressBatches([testAddress1, testAddress2], false, false).then(
//    (data) => {
//       console.log(data);
//       console.log(data.data.results);
//    }
// );

// international or local address verification
async function verifyAddress3(
   address,
   includeDetails,
   properCase,
   international
) {
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
   };
   // create the url string
   const url = `${
      international ? POSTGRID_INTL_URL : POSTGRID_STANDARD_URL
   }/verifications?includeDetails=${includeDetails}&properCase=${properCase}`;
   //response
   const response = await fetch(url, requestOptions);
   return await response.json();
}

verifyAddress3(testAddressInternational, true, true, true).then((data) =>
   console.log(data)
);
