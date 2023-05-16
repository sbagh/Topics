// bank accounts used to mail cheques
import fetch from "node-fetch";
import FormData from "form-data";
const BANK_URL = "https://api.postgrid.com/print-mail/v1/bank_accounts";
const API_KEY = "test_sk_whLGEJYLGUufMEShNDYe2B";

//1- create a canadian bank account
//Body of this request is provided as multipart/form-data. This is because we must upload a signature image with the request.
const bankName = "test bank 1";
const bankCountryCode = "CA";
const addressLine1 = "498 Geroge Ryan Ave, Oakville, ON";
const transitNumber = "12345";
const routeNumber = "678";
const accountNumber = "9876543211";
const signatureText = "SamiBagh";
const description = "testing bank account creation";

async function createBankAccount() {
   const formData = new FormData();
   formData.append("bank_name", bankName);
   formData.append("bank_country_code", bankCountryCode);
   formData.append("address_line1", addressLine1);
   formData.append("transit_number", transitNumber);
   formData.append("route_number", routeNumber);
   formData.append("account_number", accountNumber);
   formData.append("signature_text", signatureText);
   formData.append("description", description);

   const requestOptions = {
      method: "POST",
      headers: {
         "x-api-key": API_KEY,
      },
      body: formData,
   };

   try {
      const response = await fetch(BANK_URL + "/", requestOptions);
      const data = await response.json();
      console.log(data); // You can handle the response data as per your requirements
      return data;
   } catch (error) {
      console.error("Error creating bank account:", error);
   }
}

createBankAccount().then((data) => console.log(data));
