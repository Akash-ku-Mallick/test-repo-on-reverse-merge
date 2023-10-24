import axios from "axios";


// For Profile picture only


let headersList1 = {
 "Accept": "*/*" 
}

let reqOptions1 = {
  url: "https://dev.to/api/users/by_username?url=akashmallick",
  method: "GET",
  headers: headersList1,
}

let response1 = await axios.request(reqOptions1);
console.log(response1.data);

// For Articles With API Key


let headersList2 = {
 "Accept": "*/*",
 "api-key": "d1NpcrYwGQBEyM5m6SgUKABi" 
}

let reqOptions2 = {
  url: "https://dev.to/api/articles/me",
  method: "GET",
  headers: headersList2,
}

let response2 = await axios.request(reqOptions2);
console.log(response2.data);
