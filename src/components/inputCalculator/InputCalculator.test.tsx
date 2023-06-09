import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
import InputCalculator from "./InputCalculator";

describe("Input Calculator Component", () => {
	it("Should render Input Calculator", () => {
		render(<InputCalculator handleAddNumber={() => {}} numberOrOperator='0' />);
		const numberValue = screen.getByDisplayValue("0");
		expect(numberValue).toBeInTheDocument();
	});
	it("Should call handleAddNumber", async () => {
		const handleAddNumber = jest.fn();
		render(<InputCalculator handleAddNumber={() => handleAddNumber()} numberOrOperator='0' />);
		const numberValue = screen.getByDisplayValue("0");

		await userEvent.type(numberValue, "100");
		expect(handleAddNumber).toHaveBeenCalledTimes(3);
	});
	it("Should add class on numberOrOperator", async () => {
		render(<InputCalculator handleAddNumber={() => {}} numberOrOperator='123456789101112' />);

		const numberValue = screen.getByDisplayValue("123456789101112");
		expect(numberValue).toHaveClass("smallText");
	});
});
