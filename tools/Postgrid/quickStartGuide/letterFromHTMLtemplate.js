//requirements
import fetch from "node-fetch";
const POSTGRID_URL = "https://api.postgrid.com/print-mail/v1";
const API_KEY = "test_sk_whLGEJYLGUufMEShNDYe2B";

//remenber steps to sending letter:
//create letter template -> create contact -> create letter -> send and track letter

//1- create letter template using HTML
//html:
const templateHTML = `
<html>
   <head>
      <style>
         body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            line-height: 1.5;
            margin: 0;
            padding: 0;
         }
      </style>
   </head>
   <body>
      <div class="letter">
         <h1>Dear {{to.firstName}},</h1>
         <p>Welcome to our company</p>
         <p>Sincerely,</p>
         <p>{{from.firstName}}</p>
         <p>{{from.jobTitle}}</p>
         <p>{{from.companyName}}</p>
      </div>
   </body>
</html>`;

//create the template description
const templateDescription = "html test template 2";

// send request
async function createTemplate(templateDescription, templateHTML) {
   const requestOptions = {
      method: "POST",
      body: JSON.stringify({
         description: templateDescription,
         html: templateHTML,
      }),
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
   };
   // send request to /template
   const response = await fetch(POSTGRID_URL + "/templates", requestOptions);
   if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
   }

   const data = await response.json();
   return data;
}

createTemplate(templateDescription, templateHTML)
   .then((data) => console.log(data))
   .catch((error) => console.error(error));
