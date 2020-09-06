import React from "react";
import { TimeDashboard } from "./TimeDashbaord";
import { render } from "@testing-library/react";

const renderComponent = () => render(<TimeDashboard />);

describe("<TimeDashbaord />", () => {
    it("should render component without crashing", () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId("time-dashboard")).toBeInTheDocument();
    });
});