/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import './index.css';

import {
    Search,
    AttachFile,
    MoreVert,
    InsertEmoticon,
    Close,
    Send,
    Mic,
} from '@material-ui/icons';

import EmojiPicker from 'emoji-picker-react';

export default () => {

    const [text, setText] = useState('');
    const [emojiOpen, setEmojiOpen] = useState(false);

    const handleEmojiClick = (event, emojiObject) => {
        return setText(prev => prev + emojiObject.emoji);
    }

    const handleStatusEmoji = () => {
        setEmojiOpen(prev => !prev);
    }

    const handleMicClick = () => { }

    const handleSendClick = () => { }

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

            <div
                className="chatWindow--emojiarea"
                style={{ height: emojiOpen ? 300 : 0 }}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <footer className="chatWindow--footer">

                <div className="chatWindow--pre">
                    <div
                        className="chatWindow--btn"
                        onClick={handleStatusEmoji}
                        style={{ width: emojiOpen ? 40 : 0 }}
                    >
                        <Close style={{ color: '#919191' }} />
                    </div>
                    <div
                        className="chatWindow--btn"
                        onClick={handleStatusEmoji}
                    >
                        <InsertEmoticon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
                    </div>
                </div>

                <div className="chatWindow--inputarea">
                    <input
                        className="chatWindow--input"
                        type="text"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={event => setText(event.target.value)}
                    />
                </div>

                <div className="chatWindow--pos">
                    {text &&
                        <div onClick={handleMicClick} className="chatWindow--btn">
                            <Send style={{ color: '#919191' }} />
                        </div>
                    }
                    {!text &&
                        <div onClick={handleSendClick} className="chatWindow--btn">
                            <Mic style={{ color: '#919191' }} />
                        </div>
                    }
                </div>

            </footer>

        </article >
    )
}