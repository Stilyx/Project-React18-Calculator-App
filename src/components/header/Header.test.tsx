import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import {ChildComponent} from "./Mocks";

describe("Header component", () => {
	it("Should render Header", () => {
		render(<Header children={ChildComponent()} />);
		const calcText = screen.getByText("calc");
		expect(calcText).toBeInTheDocument();
	});
	it("Should render Children", () => {
		render(<Header children={ChildComponent()} />);
		const children = screen.getByText("Child component");
		expect(children).toBeInTheDocument();
	});
});
