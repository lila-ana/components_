import React from "react";
import axios from "axios";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FetchData from "../page";
import { jest } from "@jest/globals";

jest.mock("axios");
const mockedAxios = axios as jest.MockedFunction<typeof axios>; // Added a semicolon here

const mockPosts = [{ id: 1, title: "Post 1", body: "Body 1" }];

describe("Page component", () => {
  it("renders loading initially and then shows fetched data", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockPosts });

    render(<FetchData />);

    expect(screen.getByText("Loading ...")).toBeInTheDocument();

    await waitFor(() => {
      mockPosts.forEach((post) => {
        expect(screen.getByText(post.title)).toBeInTheDocument();
        expect(screen.getByText(post.body)).toBeInTheDocument();
      });
    });

    expect(
      screen.getByRole("button", { name: "Show Fetched Data" })
    ).toBeInTheDocument();
    expect(screen.getByText("page to test Production")).toBeInTheDocument();
  });
});

// import { getResource } from "./apis/api";

// jest.mock("axios"); // Mocking Axios
// import axios from "axios";

// describe("getResource function", () => {
//   describe("with success", () => {
//     const url = "http://test-url.com";
//     const onComplete = jest.fn();
//     const data = { id: 1, title: "Test Post", body: "Test Body" };

//     beforeEach(() => {
//       (axios.get as jest.Mock).mockResolvedValue({ data }); // Mocking axios.get to resolve with data
//     });

//     it("should call axios.get with the given URL", async () => {
//       await getResource(url, onComplete);
//       expect(axios.get).toHaveBeenCalledWith(url);
//     });

//     it("should call onComplete callback with response data", async () => {
//       await getResource(url, onComplete);
//       expect(onComplete).toHaveBeenCalledWith(data);
//     });
//   });

//   describe("with error", () => {
//     const url = "http://test-url.com";
//     const onComplete = jest.fn();

//     beforeEach(() => {
//       (axios.get as jest.Mock).mockRejectedValue(new Error("API Error")); // Mocking axios.get to reject with an error
//     });

//     it("should call onComplete callback with error", async () => {
//       await expect(getResource(url, onComplete)).rejects.toThrow("API Error");
//       expect(onComplete).not.toHaveBeenCalled(); // onComplete should not be called on error
//     });
//   });
// });
