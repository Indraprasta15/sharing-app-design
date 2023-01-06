import React from 'react';
import styled from 'styled-components';
import Indatube from "../img/logo1.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsIcon from '@mui/icons-material/Sports';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';


const Container = styled.div`
    flex: 1;
    background-color: ${({theme}) => theme.bgLighter};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
`;

const Img = styled.img`
    height: 25px;
`;

const Items = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;

    &:hover {
        background-color: ${({ theme }) => theme.soft};
    }
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div`
    font-size: 14px;
`;

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;  
`;

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
            <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
                <Logo>
                    <Img src={Indatube}/>
                    IndaTube
                </Logo>
            </Link>
            <Items>
                <HomeIcon />
                Home
            </Items>
            <Items>
                <ExploreIcon />
                Explore
            </Items>
            <Items>
                <SubscriptionsIcon />
                Subscription
            </Items>
            <Hr />
            <Items>
                <LibraryAddIcon />
                Library
            </Items>
            <Items>
                <HistoryIcon />
                History
            </Items>
            <Hr />
            <Link to="signin" style={{ textDecoration: "none" }}>
                <Login>
                    Sign in to like videos, comment and subscribe.
                    <Button><AccountCircleOutlinedIcon /> SIGN IN</Button>
                </Login>
            </Link>
            <Hr />
            <Title>BEST OF INDATUBE</Title>
            <Items>
                <LibraryMusicIcon />
                Music
            </Items>
            <Items>
                <SportsIcon />
                Sports
            </Items>
            <Items>
                <SportsEsportsIcon />
                Gaming
            </Items>
            <Items>
                <MovieCreationIcon />
                Movies
            </Items>
            <Items>
                <NewspaperIcon />
                News
            </Items>
            <Items>
                <LiveTvIcon />
                Live
            </Items>
            <Hr />
            <Items>
                <SettingsIcon />
                Setting
            </Items>
            <Items>
                <FlagIcon />
                Report
            </Items>
            <Items>
                <HelpIcon />
                Help
            </Items>
            <Items onClick={ () => setDarkMode(!darkMode) }>
                <LightModeIcon />
                {darkMode ? "Light" : "Dark"} Mode
            </Items>
        </Wrapper>
    </Container>
  )
};

export default Menu;