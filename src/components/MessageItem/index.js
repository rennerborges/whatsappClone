/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './index.css';

export default ({ data, user }) => {

    return (
        <article
            className="messageline"
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start',
            }}
        >
            <div
                className="messageItem"
                style={{
                    backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF',
                }}
            >
                <div className="messageText">{data.body}</div>
                <div className="messageDate">{'19:10'}</div>

            </div>
        </article >
    )
}