import React, { useState } from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { ThemeProvider, CssBaseline, createMuiTheme, Switch } from '@material-ui/core';



function Header({ user, signOut }) {

    const [darkmode, setDarkMode] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: darkmode ? 'dark' : 'light',
        }
    })


    const handlerDarkMode = () => {
        setDarkMode(!darkmode);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Container>
                    <Main>
                        <AccessTimeIcon />
                        <SearchContainer>
                            <Search>
                                <input type="text" placeholder="Search..." />
                            </Search>
                        </SearchContainer>
                        <HelpOutlineIcon />
                    </Main>
                    <Switch onChange={handlerDarkMode} value={darkmode} />
                    <UserContainer>
                        <Name>
                            {user.name}
                        </Name>
                        <UserImage onClick={signOut}>
                            <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} alt="oops" />
                        </UserImage>
                    </UserContainer>
                </Container>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default Header;

const Container = styled.div`
background:#350d86;
color:white;
display:flex;
align-items:center;
justify-content:center;
position:relative;
box-shadow:inset 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
display: flex;
margin-right: 16px;
margin-left: 16px;
`

const SearchContainer = styled.div`
min-width:400px;
margin-left:16px;
margin-right:16px;

`

const Search = styled.div`
box-shadow:inset 0 0 0 1px rgb(104 74 104);
width:100%;
border-radius: 6px;
display:flex;
align-items: center;

input {
    background:transparent;
    border:none;
    padding-left:8px;
    padding-right:8px;
    color:white;
    padding-top:4px;
    padding-bottom:4px;
}

input:focus {
    outline:none;
}

`

const UserContainer = styled.div`
display: flex;
align-items: center;
padding-right:16px;
position: absolute;
right: 0px;
`

const Name = styled.div`
padding-right: 16px;
`

const UserImage = styled.div`
width:28px;
height:28px;
border: 2px solid white;
border-radius: 3px;
cursor: pointer;

  img{
      width:100%;
  }
 
`