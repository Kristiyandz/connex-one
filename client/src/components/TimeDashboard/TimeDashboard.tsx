import React, { FC, useState, useEffect } from "react";
import { LoadingMessage } from "../LoadingMessage";
import "./TimeDashboard.css";

interface TimeDashboardProps {
    serverTime: number;
    isLoading: boolean;
};

export const TimeDashboard: FC<TimeDashboardProps> = ({ serverTime, isLoading }) => {

    const [timeDiff, setTimeDifference] = useState(0);

    const calculateTimeDifference = (): void => {
        const fetchedServerTime = new Date(serverTime * 1000).getTime();
        const currentClientTime = new Date().getTime();
        const timeDifference = (currentClientTime - fetchedServerTime) / 1000;
        setTimeDifference(timeDifference);
    };
    const formatSeconds = (seconds: number) => seconds < 9 ? `0${seconds.toFixed(0)}` : seconds.toFixed(0);

    useEffect(() => {
        const interval = setInterval(() => {
            calculateTimeDifference();
        }, 1000);
        return () => clearInterval(interval);
    });

    if (isLoading) return <LoadingMessage />;
    return (
        <div data-testid="time-dashboard" className="time-db-container">
            <h1>Time Dashboard</h1>
            <div>Most recent server time in epoch seconds<strong>{serverTime}</strong></div>
            Time difference since most recent server time <strong>{`00:00:${formatSeconds(timeDiff)}`}</strong>
        </div>
    );
};