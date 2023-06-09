import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component", () => {
	it("should render Button", () => {
		render(<Button ButtonText='Test' buttonClass='ButtonClass' handleClick={() => {}} />);

		const buttonText = screen.getByText("Test");
		expect(buttonText).toBeInTheDocument();
	});
	it("should call handleClick", () => {
		const handleClick = jest.fn();
		render(
			<Button ButtonText='Test' buttonClass='ButtonClass' handleClick={() => handleClick()} />
		);

		const buttonText = screen.getByText("Test");
		buttonText.click();
		expect(handleClick).toHaveBeenCalled();
	});
});
