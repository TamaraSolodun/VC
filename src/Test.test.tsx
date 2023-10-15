/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import Test from "./Test";

describe("App", () => {
  it("should render with the title visible", () => {
    render(<Test />);
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
  });
});
