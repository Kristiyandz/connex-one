import React, { FC } from "react";
import { LoadingMessage } from "../LoadingMessage";
import { ErrorMessage } from "../ErrorMessage";
import "./MetricsDashboard.css";

interface MetricsDashboardProps {
    apiMetrics: string | null;
    isLoading: boolean;
    hasError: boolean;
};

export const MetricsDashboard: FC<MetricsDashboardProps> = ({ apiMetrics, isLoading, hasError }) => {
    if (isLoading) return <LoadingMessage />;
    if (hasError) return <ErrorMessage service="metrics" />;
    return (
        <div data-testid="metrics-dashboard" className="metrics-db-container">
            <h1>Metrics dashboard</h1>
            <pre>
                <code data-testid="metrics-content">{apiMetrics}</code>
            </pre>
        </div>
    );
};