import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { YupValidation } from "src/utils/yup-validation";


import { RadioInput } from "./radios";
import { InputFile } from "./inputFile";
import { InputComponent } from "./input";
import { SelectComponent } from "./select";
import { TextAreaComponent } from "./textarea";
import { InputEditComponent } from "./input-edit";

export {
  Form,
  InputFile,
  RadioInput,
  YupValidation,
  InputComponent,
  InputEditComponent,
  TextAreaComponent,
  SelectComponent,
};

export type { FormHandles };
