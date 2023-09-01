import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteUsers } from '../store/actions';

const DeleteAllUser = () => {
  const dispatch=useDispatch()
 const deleteAllUser=()=>{
dispatch(deleteUsers())
 }
  return (
    <>
    <CenteredText><button onClick={() => deleteAllUser()}>Delete All User</button>
    </CenteredText>
    
    </>
    )
};

const CenteredText = styled.div`
  display: flex;
  justify-content: center;
  
`;

export default DeleteAllUser;
