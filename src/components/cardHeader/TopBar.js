import React from 'react';

import { GlobalContext } from '../../GlobalContext';
import styled from 'styled-components';

const TopHeaderWrapper = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #1f272a;
  display: flex;
  justify-content: space-between;
  color: white;

  button {
    border: 1px solid #307ebb9e;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: white;
    cursor: pointer;
  }
`;

const LoginLink = styled.a`
  margin: 0 auto;

  button {
    width: 3rem;
    height: 1.6rem;
    border-radius: 4px;
    font-size: 12px;
    font-family: 'Gothic A1',sans-serif;
  }
`;

const Avatar = styled.div`
  margin-left: auto;

  img {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
const UserName = styled.div`
    color: white;
    font-size: 12px;
    margin-right: 4px;
`;



const TopBar = () => {
  const { user, tracks } = React.useContext(GlobalContext)


  return (
    <TopHeaderWrapper >
     
      {tracks !== undefined && user ?
        <UserWrapper>
          <UserName>{user.display_name}</UserName>
          <Avatar title={user.display_name}>
            <img src={user.images &&  user.images[0].url} alt={user.display_name} />
          </Avatar>
        </UserWrapper>
        : 
        
      <LoginLink href="http://localhost:8888"> 
        <button title="Log in" >Log in</button>
      </LoginLink> 
      }
    </TopHeaderWrapper>
  );
};

export default TopBar;
