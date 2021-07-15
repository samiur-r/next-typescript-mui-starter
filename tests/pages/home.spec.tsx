import React from "react";
import sinon, { SinonStub } from "sinon";
import { render, screen, cleanup } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "../../pages/index";
import theme from "../../config/theme";
import MuiButton from "@material-ui/core/Button";

const sandbox = sinon.createSandbox();

describe("Button Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    const { container } = render(
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);

    // Assert
    expect(container.querySelector("button")).toBeInTheDocument();
    expect((React.createElement as SinonStub).calledWith(MuiButton)).toBe(true);
  });
});
