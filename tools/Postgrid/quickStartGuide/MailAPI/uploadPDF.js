import fetch from "node-fetch";
const POSTGRID_URL = "http://localhost:4000/v1";
const API_KEY = "key";
import fs from "fs";

async function createLetter(recepient, sender, pdf) {
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
      body: {
         to: recepient,
         from: sender,
         pdf: pdf,
      },
   };

   const response = await fetch(POSTGRID_URL + "/letters", requestOptions);
   return await response.json();
}

const recepient = {
   addressLine1: "145 MULBERRY ST",
   city: "NEW YORK",
   firstName: "Stacey",
   lasName: "Smith",
   provinceOrState: "NY",
};
const sender = {
   addressLine1: "145 MULBERRY ST",
   city: "NEW YORK",
   companyName: "Twitter",
   postalOrZip: "4545",
   provinceOrState: "NY",
};
const pdf = fs.createReadStream("/Users/sb/Downloads/DustysStatementTest1.pdf");
createLetter(recepient, sender, pdf).then((data) => console.log(data));
