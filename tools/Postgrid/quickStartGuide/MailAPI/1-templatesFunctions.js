// the first step is sending a letter (or postcard, cheque..etc) is creating the letter template

// contents:
//1- Create template
//2- retrieve templates:
//    2.1-  by ID, getting full template object
//    2.2 - by description, getting full template object (not exact description)
//    2.3-  by description, getting tempalte ID (exact description)
//3- updating a template
//4- delete template

//requirements
import fetch from "node-fetch";
const POSTGRID_URL = "https://api.postgrid.com/print-mail/v1";
const API_KEY = "key";

//1- Create template (description and html at bottom of this file)
//sample html template:
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
//sample template description
const templateDescription = "this is a 2nd test html template";

// function to send create template request to postgrid
async function createTemplateFromHTML(templateDescription, templateHTML) {
   // set up request parameters
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
         "content-type": "application/json",
      },
      body: JSON.stringify({
         description: templateDescription,
         html: templateHTML,
      }),
   };
   //send request
   const response = await fetch(POSTGRID_URL + "/templates", requestOptions);
   //check if request was sent and if response is ok
   if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
   }
   return await response.json();
}
// createTemplateFromHTML(templateDescription, templateHTML).then((data) =>
//    console.log(data)
// );

//2 - Retrieve templates
// 2.1- get the html template given an ID
async function retreiveTemplateByID(id) {
   // request options
   const requestOptions = {
      method: "GET",
      headers: {
         "x-api-key": API_KEY,
      },
   };

   //complete request to /templates
   const response = await fetch(
      POSTGRID_URL + `/templates/${id}`,
      requestOptions
   );
   //check status of request, if successful, get as json
   if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
   }
   const data = await response.json();
   return data;
}

// retreiveTemplateByID("template_g9gfaqTqkqA5eTYpLrF7LL").then((data) =>
//    console.log(data)
// );

// 2.2- get the html template given the template description, not an exact description
async function retreiveTemplateByDescription(descriptionString) {
   // request options
   const requestOptions = {
      method: "GET",
      headers: {
         "x-api-key": API_KEY,
      },
   };
   // create the search string
   const searchString = `?skip=0&limit=10&search=${descriptionString}`;

   const response = await fetch(
      POSTGRID_URL + "/templates" + searchString,
      requestOptions
   );

   // check if request is complete and if the response is ok
   if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
   }

   const searchResults = await response.json();

   //check if there is a match, if there is return the template id
   if (searchResults.totalCount > 0) {
      return searchResults;
   } else {
      return null;
   }
}

// retreiveTemplateByDescription("this is a test html template").then((data) =>
//    console.log(data)
// );

// 2.3- retrieve by description object, getting tempalte ID (exact description)
async function retreiveTemplateID(descriptionString) {
   // create the query string
   const searchString = encodeURIComponent(
      JSON.stringify({ description: descriptionString })
   );

   const searchResults = await retreiveTemplateByDescription(searchString);

   //check if there is a match, if there is return the template id
   if (searchResults.totalCount > 0) {
      return searchResults.data[0].id;
   } else {
      return null;
   }
}

// retreiveTemplateID("this is a test html template").then((data) =>
//    console.log(data)
// );

//3- updating/editing a template
async function editTemplate(id, options) {
   // request options
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
      },
      body: JSON.stringify({
         description: options.description,
         html: options.html,
      }),
   };

   const response = await fetch(
      POSTGRID_URL + `templates/${id}`,
      requestOptions
   );

   return await response.json();
}
// editTemplate(template_g9gfaqTqkqA5eTYpLrF7L );

//4- Delete a template
async function deleteTemplateByID(templateID) {
   const requestOptions = {
      method: "DELETE",
      headers: {
         "x-api-key": API_KEY,
      },
   };
   const response = await fetch(
      POSTGRID_URL + `/templates/${templateID}`,
      requestOptions
   );

   // // check if request is complete and if the response is ok
   // if (!response.ok) {
   //    throw new Error(`HTTP error! status: ${response.status}`);
   // }
   return await response.json();
}

// retreiveTemplateByID("template_cZbKAp3DUYmMitsuG11nE2").then((data) =>
//    console.log(data)
// );

// deleteTemplateByID("template_cZbKAp3DUYmMitsuG11nE2").then((data) =>
//    console.log(data)
// );
