/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import './index.css';

import {
    ArrowBack,
} from '@material-ui/icons';

export default ({ show, setShow, user, chatlist }) => {

    const [list, setList] = useState([
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Renner Borges' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Renner Borges' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Renner Borges' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Renner Borges' },
    ]);

    const handleClose = () => {
        return setShow(false);
    }

    return (
        <section
            className="newChat"
            style={{ left: show ? 0 : -415 }}
        >
            <div className="newChat--head">
                <div
                    className="newChat--backbutton"
                    onClick={handleClose}
                >
                    <ArrowBack style={{ color: '#FFF' }} />
                </div>
                <div className="newChat--headtitle">Nova conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}