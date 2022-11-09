import { useEffect, useState } from "react";

export default function CDM() {
  const [name,setName]=useState("Rohit");
  let newName = "Love";
  useEffect(() => {
    console.log(newName);
    setData(newName)
  }, );

getData();
console.log(newName);
// kush();
 function setData(data){
      setName(data)
  }
  function getData() {
    console.log("data is fetched");
  }
  function Kush(){
    console.log("kush")
  }
  return (
    <>
    {console.log("return")}
    <Kush/>
      <h1>{name}</h1>
      

    <h1>Hello </h1>
    </>
  );
}
