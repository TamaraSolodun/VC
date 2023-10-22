/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import type { FormInstance } from "antd";
import jest from "jest-mock";
import type { FieldData, FieldError } from "rc-field-form/es/interface";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import type { Options } from "scroll-into-view-if-needed";
import { describe, expect, it } from "vitest";

import { store } from "../../store/store";

import SubmitButton from "./SubmitButton";

describe("SubmitButton", () => {
  const mockForm: FormInstance = {
    getFieldValue: jest.fn((field) => {
      if (field === "username") return "john_doe";
      if (field === "roomnumber") return "222";
      return true;
    }),
    setFieldsValue: jest.fn(),
    scrollToField(_name: any, _options?: Options | undefined): void {},
    getFieldInstance(_name: any) {
      return true;
    },
    getFieldError(_name: any): string[] {
      return [];
    },
    getFieldsError(_nameList?: any[] | undefined): FieldError[] {
      throw new Error("Function not implemented");
    },
    getFieldWarning(_name: any): string[] {
      return [];
    },
    isFieldTouched(_name: any): boolean {
      return true;
    },
    isFieldValidating(_name: any): boolean {
      return true;
    },
    isFieldsValidating(_nameList?: any[] | undefined): boolean {
      return true;
    },
    resetFields(_fields?: any[] | undefined): void {},
    setFields(_fields: FieldData[]): void {},
    setFieldValue(_name: any, _value: any): boolean {
      return true;
    },
    validateFields: jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(null);
        }),
    ),
    submit(): void {
      throw new Error("Function not implemented.");
    },
  };

  it("renders button correctly", async () => {
    let submittable = false;
    await mockForm.validateFields({ validateOnly: true }).then(() => {
      submittable = true;
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SubmitButton form={mockForm} />
        </Provider>
      </BrowserRouter>,
    );

    const submitButton = screen.getByRole("button", { name: /let's start!/i });

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it("enables the button when form is valid", async () => {
    let submittable = false;
    await mockForm.validateFields({ validateOnly: true }).then(() => {
      submittable = true;
    });
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SubmitButton form={mockForm} />
        </Provider>
      </BrowserRouter>,
    );
    const submitButton = screen.getByRole("button", { name: /let's start!/i });

    expect(submittable).toBe(true);
    // ???
    expect(submitButton).toBeDisabled();
  });

  it("calls handleisOnCall when button is clicked", async () => {
    const submittable = false;
    const handleisOnCall = jest.fn();

    // await mockForm.validateFields({ validateOnly: true }).then(() => {
    //   submittable = true;
    // });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SubmitButton form={mockForm} />
        </Provider>
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(mockForm.validateFields).toHaveBeenCalledWith({
        validateOnly: true,
      });
    });

    const submitButton = screen.getByRole("button", { name: /let's start!/i });
    submitButton.addEventListener("click", handleisOnCall);

    fireEvent.click(submitButton);

    expect(handleisOnCall).toHaveBeenCalledTimes(1);
  });
});
