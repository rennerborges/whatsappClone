/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './index.css';

import {
    Search,
    AttachFile,
    MoreVert,
} from '@material-ui/icons';

export default () => {
    return (
        <article className="chatWindow">

            <header className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    <div className="chatWindow--name">Renner Borges</div>
                </div>

                <div className="chatWindow--headerbuttons">

                    <div className="chatWindow--btn">
                        <Search style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFile style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVert style={{ color: '#919191' }} />
                    </div>
                </div>
            </header>

            <div className="chatWindow--body">

            </div>

            <footer className="chatWindow--footer"></footer>

        </article>
    )
}