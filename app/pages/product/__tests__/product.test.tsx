import axios from "axios";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FetchData from "../page";
// const FetchData = require("../page");

describe("Page component", () => {
  it("renders loading initially and then shows fetched data", async () => {
    const mockedData = [
      { id: 1, title: "Product 1" },
      { id: 2, title: "Product 2" },
    ];
    const mockedResponse = { data: mockedData };
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(
      mockedResponse
    );
    render(<FetchData />);

    expect(screen.getByText("Loading ...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });

    expect(
      screen.getByRole("button", { name: "Show Fetched Data" })
    ).toBeInTheDocument();
    expect(screen.getByText("page to test Production")).toBeInTheDocument();
  });
});
