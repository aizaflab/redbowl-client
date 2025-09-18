"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, forwardRef } from "react";

const Input = forwardRef(
  (
    {
      className,
      type = "text",
      label,
      helperText,
      error,
      fullWidth = false,
      startIcon,
      endIcon,
      onValueChange,
      onChange,
      value,
      defaultValue,
      requiredSign = false,
      required = false,
      id,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value || defaultValue || "");
    // Generate a unique ID for the input if not provided
    const inputId =
      id ||
      `input-${
        label?.replace(/\s+/g, "-").toLowerCase() ||
        Math.random().toString(36).substring(2, 9)
      }`;

    useEffect(() => {
      if (value !== undefined && value !== inputValue) {
        setInputValue(value);
      }
    }, [value, inputValue]);

    const handleChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange?.(e);
      onValueChange?.(newValue);
    };

    // Prevent mouse wheel from changing number input value
    const handleWheel = (e) => {
      if (type === "number") {
        e.target.blur();
      }
    };

    return (
      <div className={cn("flex flex-col gap-1.5 ", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium  text-gray-100 cursor-pointer"
          >
            {label}
            {requiredSign && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {startIcon && (
            <div className="absolute left-3 flex items-center pointer-events-none text-gray-500">
              <span className="pointer-events-auto">{startIcon}</span>
            </div>
          )}

          <input
            type={type}
            id={inputId}
            className={cn(
              "flex h-10 w-full rounded-md border border-main/50  bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              startIcon && "pl-10",
              endIcon && "pr-10",
              error && "border-red-500",
              className
            )}
            value={inputValue}
            onChange={handleChange}
            onWheel={handleWheel}
            min={type === "number" ? 0 : undefined}
            ref={ref}
            required={required}
            {...props}
          />

          {endIcon && (
            <div className="absolute mt-1 right-3 flex items-center pointer-events-none text-gray-500">
              <span className="pointer-events-auto">{endIcon}</span>
            </div>
          )}
        </div>

        {helperText && !error && (
          <p className="text-xs text-gray-400 ">{helperText}</p>
        )}

        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
