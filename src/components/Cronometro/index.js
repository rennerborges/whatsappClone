/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import './index.css';

import {
    CheckCircleOutline,
    HighlightOff,
} from '@material-ui/icons';

export default ({ onStop, onConcluded }) => {

    let cron;

    const [millisecond, setMillisecond] = useState(0);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);

    useEffect(() => {
        start();
        return () => clearInterval(cron);
    })

    function start() {
        pause();
        cron = setInterval(() => { timer(); }, 10);
    }

    function reset() {
        setMillisecond(0);
        setSecond(0);
        setMinute(0);
        setHour(0);
    }

    function pause() {
        clearInterval(cron);
    }

    function timer() {
        setMillisecond(prev => prev + 10);

        if ((millisecond + 10) === 1000) {
            setMillisecond(0);
            setSecond(prev => ++prev);
        }
        if (second === 60) {
            setSecond(0);
            setMinute(prev => ++prev);
        }
        if (minute === 60) {
            setMinute(0);
            setHour(prev => ++prev);
        }
    }

    function formatterTime(time) {

        if (time < 10) {
            return '0' + time;
        }

        return time;
    }

    return (
        <div className="cronometro">
            <div
                className="cronometro--btn redHover"
                onClick={onStop}
            >
                <HighlightOff />
            </div>
            <div>{formatterTime(minute)}:{formatterTime(second)}</div>
            <div
                className="cronometro--btn greenHover"
                onClick={onConcluded}
            >
                <CheckCircleOutline />
            </div>
        </div>
    )
}