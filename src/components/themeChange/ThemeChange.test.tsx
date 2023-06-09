import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import ThemeChange from "./ThemeChange";

describe("Theme Change component", () => {
	it("Should render ThemeChange", () => {
		render(<ThemeChange setTheme={1} handleChange={() => {}} />);
		const paragraphText = screen.getByText("1");
		expect(paragraphText).toBeInTheDocument();
	});

	it("Should render ThemeChange Input", () => {
		render(<ThemeChange setTheme={1} handleChange={() => {}} />);
		const radioText = screen.getByDisplayValue("1");
		expect(radioText).toBeInTheDocument();
	});
	it("Should call handleChange", async () => {
		const handleChange = jest.fn();

		render(<ThemeChange setTheme={1} handleChange={() => handleChange()} />);
		const radioText = screen.getByDisplayValue("1");
		fireEvent.change(radioText, {target: {value: "2"}});
		expect(handleChange).toHaveBeenCalled();
	});
});
