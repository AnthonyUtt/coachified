import React from 'react';

const Message = () => {
    return (
        <p>Message works!</p>
    );
};

const MessageList = () => {
    return (
        <div>
            <p>MessageList start!</p>
            <Message />
            <Message />
            <Message />
            <p>MessageList end!</p>
        </div>
    );
};

export default MessageList;