import React, { ReactNode } from 'react';

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode | ReactNode[];
}

function Form({ children, ...props }: Props) {
  return (
    <form noValidate {...props}>
      {children}
    </form>
  );
}

export default Form;
