import axios from "axios"


async function ApiHit (){
 const result = await axios.get("https://dogapi.dog/api/v2/facts")
 console.log(result.data);
} 

ApiHit()