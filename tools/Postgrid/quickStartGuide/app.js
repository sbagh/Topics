// Here, we will sending Letters to customers using the API.
//1- Creating and designing templates
//2 -Creating contacts
//3- Sending letters
//4- Tracking letters and other analytics

// setup environment
const fetch = require("node-fetch");
const POSTGRID_URL = "https://api.postgrid.com/print-mail/v1";
const API_KEY = "key";

async function logAwait(x) {
   try {
      console.log(await x);
   } catch (e) {
      console.error(e);
   }
}

// create letter
async function createLetterWithOptions(
   toContactID,
   fromContactID,
   templateID,
   color,
   doubleSided,
   blankPageForAddress,
   description
) {
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         to: toContactID,
         from: fromContactID,
         template: templateID,
         addressPlacement: blankPageForAddress
            ? "insert_blank_page"
            : "top_first_page",
         color: color,
         doubleSided: doubleSided,
         description: description,
      }),
   };
   const resp = await fetch(POSTGRID_URL + "/letters", requestOptions);
   return await resp.json();
}

// // 2- creating contacts using the API
// async function createContact(firstName, lastName, description, address) {
//    const requestOptions = {
//       method: "POST",
//       headers: {
//          "x-api-key": API_KEY,
//          "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//          firstName: firstName,
//          lastName: lastName,
//          description: description,
//          addressLine1: address,
//       }),
//    };

//    const resp = await fetch(POSTGRID_URL + "/contacts", requestOptions);
//    return await resp.json();
// }
