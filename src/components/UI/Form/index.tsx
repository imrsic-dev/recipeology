import { FormStyled } from "./style";

import React from "react";
import type { ReactNode, FormEvent } from "react";

type TFormProps = {
  children: ReactNode;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<TFormProps> = ({ children, handleSubmit }) => (
<FormStyled onSubmit={handleSubmit}>{children}</FormStyled>
);

export default Form;
