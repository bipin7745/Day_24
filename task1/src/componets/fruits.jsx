import React from "react";

function MyFruits() {
  const fruits=["Apple","Banana","Orange","Lemon"];
  return (
    <>
      <h1>My Fruits:</h1>
      <ul>
  {fruits.map((fruit, index) => <li key={index}>I am a fruits Name { fruit }</li>)}
      </ul>
    </>
  );
}
export default MyFruits;
