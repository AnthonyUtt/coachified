import React from 'react';

// Chat Components
import MessageInput from './message-input';
import MessageList from './message-list';
import UserList from './user-list';

const Chat = () => {
    return (
        <div>
            <p>Chat works!</p>
            <MessageList />
            <UserList />
            <MessageInput />
        </div>
    );
};

export default Chat;