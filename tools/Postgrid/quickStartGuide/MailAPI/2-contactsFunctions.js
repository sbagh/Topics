// the second step in sending a letter/postcards/.etc is creating and selecting the contacts whom you are sending to
//contents:
//1- Create contact
//2- View contacts
//   2.1- get contact by id
//   2.2- get contact by first and last name

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

createContact(
   "Sami3",
   "Bagh",
   "testing create contact API",
   "200 University Ave, Waterloo, ON, Canada"
).then((data) => console.log(data));

//2- viewing contacts
// 2.1 - get contacts by id

async function retrieveContactByID(id) {
   const requestOptions = {
      method: "GET",
      headers: {
         "x-api-key": API_KEY,
      },
   };

   const response = await fetch(
      POSTGRID_URL + `/contacts/${id}`,
      requestOptions
   );

   if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
   }

   return await response.json();
}
// retrieveContactByID("contact_jvqbcm3M21B3sQpV6yCGYK").then((data) =>
//    console.log(data)
// );

//  2.2- get contact by first and last name
async function getContactByName(firstName, lastName) {
   // set request options
   const requestOptions = {
      method: "GET",
      headers: {
         "x-api-key": API_KEY,
      },
   };

   // create search string
   const searchString = encodeURIComponent(
      JSON.stringify({ firstName: firstName, lastName: lastName })
   );
   //create the query string from the search string
   const queryString = `?skip=0&limit=1&search=${searchString}`;

   // send request
   const response = await fetch(
      POSTGRID_URL + `/contacts` + queryString,
      requestOptions
   );

   // check if request was successful
   if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
   }

   const searchResults = await response.json();

   // check if contact exists
   if (searchResults.totalCount === 0) {
      throw new Error("No such contact with given name");
   }
   return searchResults.data[0];
}

// getContactByName("Sami", "Bagh").then((data) => console.log(data));
