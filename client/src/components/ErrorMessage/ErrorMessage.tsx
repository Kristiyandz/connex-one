import React, { FC } from "react";

interface ErrorMessageProps {
    service: string;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ service }) => (
    <div data-testid="error-message">
        Ann error has occured fetching {service}.
    </div>
);