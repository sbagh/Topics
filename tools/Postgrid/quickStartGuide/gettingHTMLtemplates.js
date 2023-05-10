//requirements
import fetch from "node-fetch";
const POSTGRID_URL = "https://api.postgrid.com/print-mail/v1";
const API_KEY = "test_sk_whLGEJYLGUufMEShNDYe2B";

//get the html template given an ID
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

retreiveTemplateByID("template_g9gfaqTqkqA5eTYpLrF7LL").then((data) =>
   console.log(data)
);

//get the html template given the template description
async function retreiveTemplateByDescription(descriptionString) {
   // request options
   const requestOptions = {
      method: "GET",
      headers: {
         "x-api-key": API_KEY,
      },
   };
   // create the query string
   const queryString = `?skip=0&limit=10&search=${descriptionString}`;

   const response = await fetch(
      POSTGRID_URL + "/templates" + queryString,
      requestOptions
   );

   if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
   }
   const data = await response.json();
   return data;
}

retreiveTemplateByDescription("html test template 2");
