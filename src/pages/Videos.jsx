import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Inda from '../img/logoo.png'
import Comments from '../components/Comments';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px  0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`;


const Recommendation = styled.div`
  flex: 2;
  padding: 20px;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.textsoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Videos = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe 
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
          title="IndaTube Video Player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          ></iframe>
        </VideoWrapper>
          <Title>Title Video</Title>
          <Details>
            <Info>2,334,121 views . Sep 23, 2022</Info>
            <Buttons>
              <Button><ThumbUpOutlinedIcon /> 123</Button>
              <Button><ThumbDownOutlinedIcon /> Dislike</Button>
              <Button><ReplyOutlinedIcon /> Share</Button>
              <Button><SaveAltOutlinedIcon /> Save</Button>
            </Buttons>
          </Details>
          <Hr />
          <Channel>
            <ChannelInfo>
              <Image src={Inda}/>
              <ChannelDetail>
                <ChannelName>Inda Channel</ChannelName>
                <ChannelCounter>200k Subscribers</ChannelCounter>
                <Description>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, molestiae. Natus, enim iure numquam sit quae sapiente rem repellendus sint mollitia nostrum consequuntur dolore quidem molestias ad, omnis veniam adipisci?
                </Description>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe>SUBSCRIBE</Subscribe>
          </Channel>
          <Hr />
          <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
};

export default Videos;