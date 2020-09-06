import React from "react";
import { TimeDashboard } from ".";
import { render } from "@testing-library/react";

interface TimeDashboardArgs {
    serverTime: string;
    isLoading: boolean;
};

const renderComponent = (appProps: TimeDashboardArgs) => render(<TimeDashboard {...appProps} />);

describe("<TimeDashbaord />", () => {
    it("should render component without crashing", () => {
        const mockProps = {
            serverTime: '',
            isLoading: false
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("time-dashboard")).toBeInTheDocument();
    });
    it("should render loading message when fetching the data", () => {
        const mockProps = {
            serverTime: '',
            isLoading: true
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("loading-message")).toBeInTheDocument();
    });
    it("should render current server time when loading has finished", () => {
        const mockProps = {
            serverTime: '',
            isLoading: false
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("time-dashboard")).toBeInTheDocument();
    });
});