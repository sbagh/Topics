// 3rd step in sending a letter is to create the letter, which means combining template from step 1 and contacts from step 2

//contents:
//1- create letter

//requirements
import fetch from "node-fetch";
import fs from "fs";
const POSTGRID_URL = "https://api.postgrid.com/print-mail/v1/letters";
// const POSTGRID_Local = "http://localhost:4000/v1";
const API_KEY = "key";

const createLetter = async (recipient, sender, pdf) => {
   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         to: recipient,
         from: sender,
         pdf: pdf,
      }),
   };
   const response = await fetch(POSTGRID_URL, requestOptions);
   return await response.json();
};

const recipient = "contact_1m8T2RQkpy3U7J9XsLPfdX";
const sender = "contact_1m8T2RQkpy3U7J9XsLPfdX";

const pdf =
   "https://pg-prod-bucket-1.s3.amazonaws.com/live/usr_9m6FVmm78VxXhtkKjARXnE/ltr_6YgdBFHXL2axmqzKY8EEu8.pdf";

createLetter(recipient, sender, pdf).then((data) => console.log(data));

// // // form data format
// // async function createLetter(recipient, sender, template) {
// //    const formData = new FormData();
// //    formData.append("to", recipient);
// //    formData.append("from", sender);
// //    // formData.append("pdf", pdf);
// //    formData.append("template", template);

// //    const requestOptions = {
// //       method: "POST",
// //       headers: {
// //          "x-api-key": API_KEY,
// //       },
// //       body: formData,
// //    };

// //    const response = await fetch(POSTGRID_Local + "/letters", requestOptions);
// //    return await response.json();
// // }

// // const template = "template_5uPCRzQYa9CqBs8VbGF4XY";
// // const recipient = "contact_1vRtohSrsti8cMKq7Zun4z";
// // const sender = "contact_1vRtohSrsti8cMKq7Zun4z";

// // const pdf = fs.createReadStream("./DustysStatementTest1.pdf");

// // const pdf =
// //    "pdf=https://pg-prod-bucket-1.s3.amazonaws.com/live/usr_9m6FVmm78VxXhtkKjARXnE/ltr_6YgdBFHXL2axmqzKY8EEu8.pdf";

// // createLetter(recipient, sender, template)
// //    .then((data) => console.log(data))
// //    .catch((error) => console.error(error));

// //1- create a letter

// // letter with pdf link and to is an object not contact id
// async function createLetter(recepient, sender) {
//    const requestOptions = {
//       method: "POST",
//       headers: {
//          "x-api-key": API_KEY,
//          "Content-Type": "application/json",
//       },
//       body: {
//          to: recepient,
//          from: sender,
//          template: "template_9PSi2nYfUUHh5Ti2dPv7Pp",
//       },
//    };

//    const response = await fetch(POSTGRID_URL + "/letters", requestOptions);
//    return await response.json();
// }

// const recepient = "contact_fi7yfPCUCoKQ8jMZAEFpCn";
// const sender = "contact_fi7yfPCUCoKQ8jMZAEFpCn";
// const pdf =
//    "https://pg-prod-bucket-1.s3.amazonaws.com/live/usr_9m6FVmm78VxXhtkKjARXnE/ltr_6YgdBFHXL2axmqzKY8EEu8.pdf";
