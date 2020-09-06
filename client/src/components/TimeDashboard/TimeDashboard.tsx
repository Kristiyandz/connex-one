import React, { FC } from "react";
import "./TimeDashboard.css";

interface TimeDashboardProps {
    serverTime: string;
    isLoading: boolean;
};

export const TimeDashboard: FC<TimeDashboardProps> = ({ serverTime, isLoading }) => {
    if (isLoading) return <div data-testid="loading-message">Loading...</div>
    return (
        <div data-testid="time-dashboard" className="time-db-container">
            Time Dashboard
            current server time {serverTime}
        </div>
    );
};