import React from "react";
import { LoadingMessage } from "./LoadingMessage";
import { render } from "@testing-library/react";

const renderComponent = () => render(<LoadingMessage />);

describe("<LoadingMessage />", () => {
    it("should render component without crashing", () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId("loading-message")).toBeInTheDocument();
    });
});