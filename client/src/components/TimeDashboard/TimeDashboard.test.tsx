import React from "react";
import { TimeDashboard } from ".";
import { render } from "@testing-library/react";

interface TimeDashboardArgs {
    serverTime: number;
    isLoading: boolean;
    hasError: boolean;
};

const renderComponent = (appProps: TimeDashboardArgs) => render(<TimeDashboard {...appProps} />);

describe("<TimeDashbaord />", () => {
    it("should render component without crashing", () => {
        const mockProps = {
            serverTime: 0,
            isLoading: false,
            hasError: false
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("time-dashboard")).toBeInTheDocument();
    });
    it("should render loading message when fetching the data", () => {
        const mockProps = {
            serverTime: 0,
            isLoading: true,
            hasError: false
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("loading-message")).toBeInTheDocument();
    });
    it("should render current server time when loading has finished", () => {
        const mockProps = {
            serverTime: 0,
            isLoading: false,
            hasError: false
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("time-dashboard")).toBeInTheDocument();
    });
    it("should render error message when the API throws an error", () => {
        const mockProps = {
            serverTime: 0,
            isLoading: false,
            hasError: true,
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("error-message")).toBeInTheDocument();
    });
    it("should render error message when the API throws an error with the name of the service", () => {
        const mockProps = {
            serverTime: 0,
            isLoading: false,
            hasError: true
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("error-message")).toHaveTextContent("Ann error has occured fetching time.");
    });
});