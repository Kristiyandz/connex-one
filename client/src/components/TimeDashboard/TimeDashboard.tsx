import React, { FC } from "react";
import { LoadingMessage } from "../LoadingMessage";
import "./TimeDashboard.css";

interface TimeDashboardProps {
    serverTime: string;
    isLoading: boolean;
};

export const TimeDashboard: FC<TimeDashboardProps> = ({ serverTime, isLoading }) => {
    if (isLoading) return <LoadingMessage />;
    return (
        <div data-testid="time-dashboard" className="time-db-container">
            Time Dashboard
            current server time {serverTime}
        </div>
    );
};