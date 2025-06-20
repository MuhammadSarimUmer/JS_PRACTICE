
const URL ="https://catfact.ninja/fact";

const  getData = async ()=>{
    console.log("getting data");
     let response = await fetch(URL);
     console.log(response);
     let jsonresponse = await response.json();
     console.log(jsonresponse.fact
     );


}
getData()