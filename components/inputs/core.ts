import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { YupValidation } from "src/utils/yup-validation";

import { RadioInput } from "./radios";
import { InputComponent } from "./input";
import { SelectComponent } from "./select";
import { TextAreaComponent } from "./textarea";
import { InputEditComponent } from "./input-edit";

export {
  Form,
  YupValidation,
  RadioInput,
  InputComponent,
  InputEditComponent,
  TextAreaComponent,
  SelectComponent,
};

export type { FormHandles };
