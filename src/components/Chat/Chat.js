import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import db from '../../firebase';

import './Chat.css';

function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log('You typed >>> ', input);

    setInput('');
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className='chat__headerInfo'>
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        <p className={`chat__message ${true && 'chat__reciever'}`}>
          <span className='chat__name'>Andrey</span>
          Hello my friends!
          <span className='chat__timestamp'>15:00</span>
        </p>
      </div>

      <div className='chat__footer'>
        <InsertEmoticonIcon />

        <form>
          <input
            type='text'
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder='Type a message'
          />
          <button type='submit' onClick={sendMessage}>
            Send a message
          </button>
        </form>

        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
