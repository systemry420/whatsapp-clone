import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from "@material-ui/icons"
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"


function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const sendMessage = (e) => {

    }
    
    return(
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message chat__reciever">
                    <span className="chat__name">
                        David
                    </span>
                    Hey guys
                    <span className="chat__timestamp">
                        3:45pm
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Type a message" />
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;