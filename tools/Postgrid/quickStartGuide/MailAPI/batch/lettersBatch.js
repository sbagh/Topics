// 5367 letters took about 37 seconds
// 1250 letters took about 13 seconds

import fetch from "node-fetch";
import { performance } from "perf_hooks"; // import performance

const POSTGRID_URL = "https://api.postgrid.com/print-mail/v1/letters/batch";
const POSTGRID_Local = "http://localhost:4000/v1/letters/batch";

const API_KEY_online = "test_sk_7Dqujht6tA5DE5JVDJToik";
const API_KEY = "test_sk_9bNemLux1WJ85BMxwtg5xz";

const shellHTML = `
    <p>
    Hello {{to.firstName}},
    </p>

    <p>
    Here is a table:
    </p>

    {{tableHTML}}
    `;

const createLetters = async () => {
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY_online,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         html: shellHTML,
         data: [
            {
               addressPlacement: "insert_blank_page",
               mergeVariables: {
                  tableHTML: `
                            <table>
                              <tr>
                                <th>Company</th>
                                <th>Contact</th>
                                <th>Country</th>
                              </tr>
                              <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                              </tr>
                              <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr>
                            </table>
                            `,
               },
               description: "Cool new letter",
               to: "contact_rXodESK5V4zGReZgatWTZL",
               from: "contact_rXodESK5V4zGReZgatWTZL",
            },
            {
               addressPlacement: "insert_blank_page",
               mergeVariables: {
                  tableHTML: `
                            <table>
                              <tr>
                                <th>Company</th>
                                <th>Contact</th>
                                <th>Country</th>
                              </tr>
                              <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                              </tr>
                              <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr>
                            </table>
                            `,
               },
               description: "Cool new letter",
               to: "contact_rXodESK5V4zGReZgatWTZL",
               from: "contact_rXodESK5V4zGReZgatWTZL",
            },
         ],
      }),
   };

   const startTime = performance.now(); // start timer
   const response = await fetch(POSTGRID_URL, requestOptions);
   const endTime = performance.now(); // end time
   const timeTaken = endTime - startTime; // time taken in milliseconds

   console.log(`Time taken for the request: ${timeTaken.toFixed(2)} ms`); // log the time taken

   return await response.json();
};

createLetters().then((data) => {
   console.log(data);
   console.log(data?.data?.[0]?.error);
});
