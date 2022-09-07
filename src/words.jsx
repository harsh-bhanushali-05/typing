import React,{useState} from "react";
import Array from "./dictionary";
import   "./styles.css";
import mode from "./mode";
var dig="";
var no=10
//  no=mode;
// console.log(no);
function random()
{
for(var i=0;i<no;i++){
  var ind=Math.floor(Math.random()*Array.length);
  if(i===0){
    dig=Array[ind];
  }
  else{
    dig=dig+" "+Array[ind];
  }
}}
function alot(){
  
  random();
  return <div>
  <form>
<textarea className="area" type="text" placeholder={dig}/>
  <h1>{no}</h1>
  </form>
</div> ;
}
export default alot;