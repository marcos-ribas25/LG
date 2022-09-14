import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import * as S from "./styles";

import { useField } from "@unform/core";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    value: string;
    label: string;
  }[];
}

export function RadioInput({ name, options, ...rest }) {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find((ref) => ref.checked)?.value || "";
      },
      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <S.InputRadio>
      <div className="input-content">
        {options.map((option, index) => (
          <label
            htmlFor={option.label + option.value}
            key={option.label + option.value}
            className="paragraph-2-regular-graphie"
          >
            <input
              ref={(ref) => ref && (inputRefs.current[index] = ref)}
              id={option.label + option.value}
              type="radio"
              name={name}
              defaultChecked={defaultValue.includes(option.value)}
              value={option.value}
              {...rest}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {error && (
        <span className="error paragraph-3-bold-graphie error-message">
          {error}
        </span>
      )}
    </S.InputRadio>
  );
}
