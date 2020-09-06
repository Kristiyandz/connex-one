import React from "react";
import { ErrorMessage } from "./ErrorMessage";
import { render } from "@testing-library/react";

interface ErrorMessageArgs {
    service: string;
};

const renderComponent = (appProps: ErrorMessageArgs) => render(<ErrorMessage {...appProps} />);

describe("<ErrorMessage />", () => {
    it("should render component without crashing", () => {
        const mockProps = {
            service: "some service"
        }
        const { getByTestId } = renderComponent(mockProps);
        expect(getByTestId("error-message")).toBeInTheDocument();
    });
});