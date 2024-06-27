import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import MockExample from "./MockExample";
import { jest } from "@jest/globals";

// Mock jest and set the type
jest.mock("axios");
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe("App", () => {
  const renderComponent = () => render(<MockExample />);

  test("renders learn react link", async () => {
    const { getByText, getAllByRole } = renderComponent();

    // Provide the data object to be returned
    mockedAxios.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Joe Doe",
        },
        {
          id: 2,
          name: "Jane Doe",
        },
      ],
    });

    fireEvent.click(getByText("Get users"));

    await waitFor(() => {
      const userList = getAllByRole("listitem");
      expect(userList).toHaveLength(2);
      expect(userList[0]).toHaveTextContent("Joe Doe");
      expect(userList[1]).toHaveTextContent("Jane Doe");
    });
  });
});
