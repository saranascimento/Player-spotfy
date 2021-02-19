import { createGlobalStyle } from 'styled-components';
// @import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  
  body {
    display: flex;
    justify-content: center;
    background-color: #1e2450;
    padding: 4px;
    height: 100vh;
    font-family: 'Gothic A1',sans-serif;
  }
  
  .player {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .card {
    width: 18rem;
    height: 32rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    filter: drop-shadow(0px 19px 14px rgba(0, 0, 0, 0.75));
    position: relative;
  }

  btnActive {
      color: green,
      border: 1px solid green;
  }

`