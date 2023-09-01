import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { removeUser } from "../store/slices/userSlice";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();

  const deleteUser = (user) => {
    dispatch(removeUser(user));
    console.log('Deleted user:', user);
  }

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            <div>{user}</div>
            <div>
              <button onClick={() => deleteUser(id)}>Delete</button>
            </div>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Adjust the gap size as needed */
  
  li {
    display: flex;
    justify-content: space-between;
  }
`;

export default DisplayUsers;
