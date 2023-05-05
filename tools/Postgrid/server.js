// table of contents:
// 1. Contacts API calls
// 2. Letter API calls

// import requirments and setup server
import express from "express";
import { PostGrid } from "postgrid-node-client";
const app = express();
app.use(express.json());
const PORT = 4444;
// create postgrid client with test api key
const postGridClient = new PostGrid({
   mail: "test_sk_whLGEJYLGUufMEShNDYe2B",
});

// ---------------- 1. Contacts API calls ---------------- //

//create contact end point
app.post("/createContact", async (req, res) => {
   const contactDetails = req.body;
   const contactResponse = await postGridClient.contact.create(contactDetails);
   console.log(contactResponse);
   res.send(contactResponse);
});

//delete contact
app.delete("/deleteContact", async (req, res) => {
   const contactID = req.query.contactID;
   console.log(contactID);
   const contactResponse = await postGridClient.contact.delete(contactID);
   console.log(contactResponse);
   res.send(contactResponse);
});

// list contacts
app.get("/listContacts", async (req, res) => {
   
});

// ---------------- 2. Letter API calls ---------------- //

// create Letter
app.post("/createLetter", async (req, res) => {
   const letterDetails = req.body;
   const letter = await postGridClient.letter.create(letterDetails);
   console.log(letter);
   res.send(letter);
});

app.listen(PORT, console.log("listening on port: ", PORT));
