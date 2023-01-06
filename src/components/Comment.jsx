import React from 'react';
import styled from 'styled-components';
import Indra from '../img/indra1.jpg';

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text};
`;

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`;

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textsoft};
`;

const Text = styled.span`
    font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
        <Avatar src={Indra} />
        <Details>
            <Name>
                Vika <Date>3 days ago</Date>
            </Name>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, reiciendis eveniet ex saepe aperiam exercitationem doloribus explicabo deleniti labore hic? Modi sed nostrum, dicta nihil dignissimos quibusdam natus laudantium deserunt?
            </Text>
        </Details>
    </Container>
  )
}

export default Comment;