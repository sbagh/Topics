//requirements
import fetch from "node-fetch";
const POSTGRID_URL = "https://api.postgrid.com/print-mail/v1";
const API_KEY = "key";

// function to get list of return envelope orders
async function listReturnEnvelopeOrders(envelopeID) {
   const requestOptions = {
      method: "GET",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
   };

   const response = await fetch(
      POSTGRID_URL + `/return_envelopes/${envelopeID}/orders`,
      requestOptions
   );

   return await response.json();
}

// listReturnEnvelopeOrders("return_envelope_9HVrCp7pgJnybJZZu9CJUz").then(
//    (data) => {
//       console.log(data);
//       console.log(data.data);
//    }
// );

// function to get a specific  reutrn evenelope order given enevelop ID and order ID
async function getReturnEvenelopeOrder(envelopeID, returnOrderID) {
   const requestOptions = {
      method: "GET",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
   };

   const response = await fetch(
      POSTGRID_URL +
         `/return_envelopes/${envelopeID}/orders/${returnOrderID}?expand[]=returnEnvelope`,
      requestOptions
   );

   return await response.json();
}

getReturnEvenelopeOrder(
   "return_envelope_9HVrCp7pgJnybJZZu9CJUz",
   "return_envelope_order_7woJNKioRWaUgAaSMStYhC"
).then((data) => console.log(data));
