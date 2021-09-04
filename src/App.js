/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import './App.css';

import {
	DonutLarge,
	Chat,
	MoreVert,
	Search,
} from '@material-ui/icons';

import ChatListItem from './components/ChatListItem';

export default () => {

	const [chatlist, setChatlist] = useState([{}, {}, {}, {}]);

	return (
		<section className="app-window">

			<section className="sidebar">

				<header>
					<img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
					<div className="header-buttons">
						<div className="header--btn">
							<DonutLarge style={{ color: '#919191' }} />
						</div>
						<div className="header--btn">
							<Chat style={{ color: '#919191' }} />
						</div>
						<div className="header--btn">
							<MoreVert style={{ color: '#919191' }} />
						</div>
					</div>
				</header>

				<section className="search">
					<div className="search--input">
						<Search style={{ color: '#919191', fontSize: 'small' }} />
						<input type="search" placeholder="Procurar ou começar uma nova conversa" />
					</div>
				</section>

				<section className="chatlist">
					{chatlist.map((chat, key) => (
						<ChatListItem
							key={key}
						/>
					))}
				</section>
			</section>

			<section className="contentarea">

			</section>
		</section>
	)
}