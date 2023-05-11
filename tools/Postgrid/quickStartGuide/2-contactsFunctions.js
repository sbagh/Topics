// the second step in sending a letter/postcards/.etc is creating and selecting the contacts whom you are sending to
//1- Create contact
//2- View contacts

//requirements
import fetch from "node-fetch";
const POSTGRID_URL = "https://api.postgrid.com/print-mail/v1";
const API_KEY = "test_sk_whLGEJYLGUufMEShNDYe2B";

//1- Create contact
async function createContact(firstName, lastName, description, adddress) {
   //create the request
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         firstName: firstName,
         lastName: lastName,
         description: description,
         addressLine1: adddress,
      }),
   };

   //send request to /contacts endpoint
   const response = await fetch(POSTGRID_URL + "/contacts", requestOptions);

   //check status of request, if successful, get as json
   if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
   }

   return await response.json();
}

// createContact(
//    "Sami",
//    "Bagh",
//    "testing create contact API",
//    "200 University Ave, Waterloo, ON, Canada"
// ).then((data) => console.log(data));
