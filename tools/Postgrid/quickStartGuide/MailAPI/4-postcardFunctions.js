import fetch from "node-fetch";
import fs from "fs";
const POSTGRID_URL = "https://api.postgrid.com/print-mail/v1";
const POSTGRID_Local = "http://localhost:4000/v1";
const API_KEY = "key";

// letter with pdf link and to is an object not contact id
async function createPostcard(recepient, sender, pdf) {
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
      body: {
         to.firstN,
         from: sender,
         pdf,
      },
   };

   const response = await fetch(POSTGRID_URL + "/letters", requestOptions);
   return await response.json();
}

const recepient = "contact_fi7yfPCUCoKQ8jMZAEFpCn";
const sender = "contact_fi7yfPCUCoKQ8jMZAEFpCn";
const pdf =
   "https://pg-prod-bucket-1.s3.amazonaws.com/live/usr_9m6FVmm78VxXhtkKjARXnE/ltr_6YgdBFHXL2axmqzKY8EEu8.pdf";

createPostcard(recepient, sender, pdf).then((data) => console.log(data));
