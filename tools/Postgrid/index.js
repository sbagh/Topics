import express from "express";
import { PostGrid } from "postgrid-node-client";
const app = express();
app.use(express.json());

const PORT = 4444;

// create postgrid client with test api key
const postGridClient = new PostGrid({
   mail: "test_sk_whLGEJYLGUufMEShNDYe2B",
});

// const contact = await client.contact.create({
//    addressLine1: "2343 Toronto Drive",
//    provinceOrState: "ON",
//    postalOrZip: "L63S3G",
//    countryCode: "CA",
//    firstName: "Sami",
//    lastName: "B",
//    email: "jim@jimmys.com",
//    phoneNumber: "317-555-1212",
//    companyName: "Sami Bar",
//    jobTitle: "Barkeep",
// });

//create contact
// app.post("/createContact", async (req, res) => {
//    //    console.log(req.body);
//    const contactDetails = req.body;
//    const contact = await postGridClient.contact.create(contactDetails);
//    console.log(contact);
//    res.send(contact);
// });

//create contact end point
app.post("/createContact", async (req, res) => {
   const contactDetails = req.body;
   const contact = await createContact(contactDetails);
   console.log(contact);
   res.send(contact);
});

// postgrid client create contact
const createContact = async (contactDetails) => {
   const response = await postGridClient.contact.create(contactDetails);
   return response;
};

//delete contact
app.delete("/deleteContact", async (req, res) => {
   const contactID = req.query.contactID;
   console.log(contactID);
   const contact = await postGridClient.contact.delete(contactID);
   console.log(contact);
   res.send(contact);
});

// create Letter
app.post("/createLetter", async (req, res) => {
   const letterDetails = req.body;
   const letter = await postGridClient.letter.create(letterDetails);
   console.log(letter);
   res.send(letter);
});




app.listen(PORT, console.log("listening on port: ", PORT));


