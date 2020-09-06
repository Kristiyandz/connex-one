import React from "react";
import { MetricsDashboard } from "./MetrcisDashboard";
import { render } from "@testing-library/react";

interface MetricsDashboardArgs {
    apiMetrics: string | null;
    isLoading: boolean;
};

const renderComponent = (appProps: MetricsDashboardArgs) => render(<MetricsDashboard {...appProps} />);

describe("<MetricsDashboard />", () => {
    it("should render component without crashing", () => {
        const mockProps = {
            apiMetrics: "",
            isLoading: false
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("metrics-dashboard")).toBeInTheDocument();
    });
    it("should render the passed API metrics", () => {
        const mockProps = {
            apiMetrics: "Some numbers and metrics around the API",
            isLoading: false
        };
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("metrics-content")).toHaveTextContent(mockProps.apiMetrics);
    });
});