import React from "react";
import Header from "./components/Header";
import Data from "./components/Data";
import Card from "./components/Card";



export default function(){
  const item=Data.map(function(x){
    return (<Card
      key={x.id}
      {...x}
    />)
  })
  return(
    <div>
    <Header/>
    {item}
    </div>
  )
}