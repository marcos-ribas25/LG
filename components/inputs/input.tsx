import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { useField } from "@unform/core";

const ReactInputMask = dynamic(() => import("react-input-mask"), {
  ssr: false,
});

import * as S from "./styles";

interface Props {
  id?: string;
  name: string;
  accept?: string;
  labelAnimation?: string;
  label?: string;
  edit?: boolean;
  type: string;
  mask?: string;
  placeholder?: string;
  onChangeInput?: React.Dispatch<string>;
}

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export function InputComponent({
  id,
  name,
  accept,
  labelAnimation,
  edit,
  type,
  mask,
  label,
  onChangeInput,
  ...rest
}: InputProps) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || value,
      path: "value",
    });
  }, [fieldName, value, registerField]);

  return (
    <S.Input>
      <div className="input-content">
        {mask ? (
          <ReactInputMask
            mask={mask}
            onChange={(e) => {
              setValue(e.target.value);

              if (onChangeInput) {
                onChangeInput(e.target.value);
              }
            }}
            value={value}
          >
            {() => (
              <input
                className="paragraph-2-medium tk-poppins"
                id={id}
                defaultValue={defaultValue}
                ref={inputRef}
                name={name}
                {...rest}
              />
            )}
          </ReactInputMask>
        ) : (
          <>
            {label && (
              <label
                className="label-text paragraph-2-bold tk-poppins"
                htmlFor={id}
              >
                {label}
              </label>
            )}

            <input
              id={id}
              type={type}
              accept={accept}
              defaultValue={defaultValue}
              ref={inputRef}
              name={name}
              onChange={(e) => {
                setValue(e.target.value);
  
                if (onChangeInput) {
                  onChangeInput(e.target.value);
                }
              }}
              {...rest}
              className="paragraph-2-medium tk-poppins"
            />
          </>
        )}
      </div>

      {error && (
        <span className="error paragraph-2-bold-europa error-message">
          {error}
        </span>
      )}
    </S.Input>
  );
}
