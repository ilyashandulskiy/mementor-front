import React, { ReactNode } from 'react';

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode | ReactNode[];
  formId?: string;
}

function Form({ children, formId, ...props }: Props) {
  return (
    <form key={formId} noValidate {...props}>
      {children}
    </form>
  );
}

export default Form;
