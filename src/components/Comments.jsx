import React from 'react';
import styled from 'styled-components';
import Inda from '../img/logoo.png';
import Comment from './Comment';

const Container = styled.div`
    
`;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Input = styled.input`
   border: none;
   border-bottom: 1px solid ${({theme}) => theme.soft};
   background-color: transparent;
   outline: none;
   width: 100%;
`;

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src={Inda} />
            <Input placeholder='Add a comment...'/>
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}

export default Comments;