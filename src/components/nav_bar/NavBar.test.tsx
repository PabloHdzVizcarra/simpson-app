import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("test in NavBar component", () => {
  test("show title correctly", () => {
    render(<NavBar title="App" />)

    expect(screen.getByText("App")).toBeInTheDocument()
  })
})

