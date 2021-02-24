import React from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
/* import AddIcon from '@material-ui/icons/Add';
 */



function Chat() {

    return (
        <Container>
            <ChannelHeader>
                <Main>
                    <ChannelText>
                        #nothing
                    <StarBorderIcon />
                    </ChannelText>
                    {/*  <ChannelTopic>
                        ChannelAdd
                    </ChannelTopic> */}
                </Main>
                {/*  <AddChannel>
                    <ChannelAdd>
                        <AddIcon />
                        Add
                    </ChannelAdd>
                </AddChannel> */}
            </ChannelHeader>
        </Container>
    )
}

export default Chat


const Container = styled.div`
display: flex;
`

const ChannelHeader = styled.div`
height: 63px;
width: 100%;
border: 1px solid #532753;
`
const Main = styled.div`
display:flex;
`
const ChannelTopic = styled.div`

`
const ChannelText = styled.div`
display:flex;
align-items: center;
padding-top: 12px;
padding-left: 25px;
`
const AddChannel = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const ChannelAdd = styled.div`

`