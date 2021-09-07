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
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

export default () => {

	const [chatlist, setChatlist] = useState([
		{ chatId: 1, user: 'Gisele Santos', image: 'https://www.w3schools.com/howto/img_avatar2.png' },
		{ chatId: 2, user: 'Livia Cristina', image: 'https://www.w3schools.com/howto/img_avatar2.png' },
		{ chatId: 3, user: 'Washington Borges', image: 'https://www.w3schools.com/howto/img_avatar2.png' },
		{ chatId: 4, user: 'Luiz Alexandre', image: 'https://www.w3schools.com/howto/img_avatar2.png' },
		{ chatId: 5, user: 'Mateus Augusto', image: 'https://www.w3schools.com/howto/img_avatar2.png' },
		{ chatId: 6, user: 'Thander Augusto', image: 'https://www.w3schools.com/howto/img_avatar2.png' },



	]);
	const [activeChat, setActiveChat] = useState({});
	const [user, setUser] = useState({
		id: 1234,
		avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
		name: 'Renner Borges'
	});

	return (
		<section className="app-window">

			<section className="sidebar">

				<header>
					<img className="header--avatar" src={user.avatar} alt="" />
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
							isActive={activeChat.chatId === chat.chatId}
							user={chat.user}
							image={chat.image}
							onClick={() => setActiveChat(chat)}
						/>
					))}
				</section>
			</section>

			<section className="contentarea">
				{activeChat.chatId &&
					<ChatWindow
						user={user}
					/>
				}
				{!activeChat.chatId &&
					<ChatIntro />
				}
			</section>
		</section>
	)
}