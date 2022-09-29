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
  label?: string;
  type: string;
  placeholder?: string;
}

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export function InputFile({
  id,
  name,
  accept,
  type,
  label,
  ...rest
}: InputProps) {
  const { error } = useField(name);

  return (
    <S.File>
      <div className="input-content">
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
          name={name}
          {...rest}
          className="paragraph-2-medium tk-poppins"
        />
      </div>

      {error && (
        <span className="error paragraph-2-bold-europa error-message">
          {error}
        </span>
      )}
    </S.File>
  );
}
