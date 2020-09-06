import React from "react";
import { MetricsDashboard } from "./MetrcisDashboard";
import { render } from "@testing-library/react";

const renderComponent = () => render(<MetricsDashboard />);

describe("<MetricsDashboard />", () => {
    it("should render component without crashing", () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId("metrics-dashboard")).toBeInTheDocument();
    });
});