import React from "react";
import { MetricsDashboard } from "./MetrcisDashboard";
import { render } from "@testing-library/react";

interface MetricsDashboardArgs {
    apiMetrics: string | null;
    isLoading: boolean;
    hasError: boolean;
};

const renderComponent = (appProps: MetricsDashboardArgs) => render(<MetricsDashboard {...appProps} />);

describe("<MetricsDashboard />", () => {
    it("should render component without crashing", () => {
        const mockProps = {
            apiMetrics: "",
            isLoading: false,
            hasError: false
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("metrics-dashboard")).toBeInTheDocument();
    });
    it("should render the passed API metrics", () => {
        const mockProps = {
            apiMetrics: "Some numbers and metrics around the API",
            isLoading: false,
            hasError: false
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("metrics-content")).toHaveTextContent(mockProps.apiMetrics);
    });
    it("should render error message when the API throws an error", () => {
        const mockProps = {
            apiMetrics: "Some numbers and metrics around the API",
            isLoading: false,
            hasError: true
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("error-message")).toBeInTheDocument();
    });
    it("should render error message when the API throws an error with the name of the service", () => {
        const mockProps = {
            apiMetrics: "Some numbers and metrics around the API",
            isLoading: false,
            hasError: true
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("error-message")).toHaveTextContent("Ann error has occured fetching metrics.");
    });
});