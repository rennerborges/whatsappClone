/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './index.css';

import { SetClassName } from '../../util/classes';

export default ({ user, image, onClick, isActive }) => {
    return (
        <article
            className={SetClassName('chatListItem', 'active', isActive)}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src={image} alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{user}</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </article>
    )
}