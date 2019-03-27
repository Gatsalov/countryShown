import React, { Component } from 'react';

const Header = prors => {

  const { branding, printing } = prors;
  const doSomthing = (e)=>{
    printing(branding,e)
  }
  return  (
    <div>
      <h1 onClick={doSomthing}>{ branding }</h1>
    </div>
  );
}
 
export default Header;