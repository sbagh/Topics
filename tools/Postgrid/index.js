import express from "express";
import { PostGrid } from "postgrid-node-client";
const app = express();
app.use(express.json());

const PORT = 4444;

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

app.post("/createContact", async (req, res) => {
   //    console.log(req.body);
   const contact = await postGridClient.contact.create(req.body);
   console.log(contact);
   res.send(contact);
});

app.listen(PORT, console.log("listening on port: ", PORT));