//requirements
import fetch from "node-fetch";
const POSTGRID_URL = "https://api.postgrid.com/print-mail/v1";
const API_KEY = "test_sk_whLGEJYLGUufMEShNDYe2B";

//get the html template given an ID
async function retreiveTemplate(id) {
   const requestOptions = {
      method: "GET",
      headers: {
         "x-api-key": API_KEY,
      },
   };

   const response = await fetch(
      POSTGRID_URL + `/templates/${id}`,
      requestOptions
   );
   if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
   }

   const data = await response.json();
   return data;
}

retreiveTemplate("template_g9gfaqTqkqA5eTYpLrF7LL").then((data) =>
   console.log(data)
);
