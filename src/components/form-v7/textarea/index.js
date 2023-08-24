import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import { Text } from '../../typography';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import Label from '../label';
import StyledTextarea from './index.style';

type Props = {
  htmlElementName?: string,
  label?: string,
  isDisabled?: Boolean,
  defaultValue?: string,
  placeholder?: string,
  resize?: 'horizontal' | 'vertical' | 'none' | 'both',
  minHeight?: number,
  handleChange?: () => void,
  errorMessage?: string,
  register?: any,
  required?: boolean | String,
  number?: number,
};

const Textarea = (props: Props) => {
  const {
    htmlElementName, label, isDisabled, defaultValue, placeholder,
    resize, minHeight, handleChange, errorMessage, register, number, required,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Label htmlFor={htmlElementName} label={label} number={number} required={required} />

      <StyledTextarea
        name={htmlElementName}
        placeholder={placeholder}
        resize={resize}
        minHeight={minHeight}
        {...register(htmlElementName, {
          onChange: handleChange,
          disabled: isDisabled,
          value: defaultValue,
        })}
      />
      <ErrorMsg errorMessage={errorMessage} />
    </ThemeProvider>
  );
};

Textarea.defaultProps = {
  htmlElementName: 'textarea-element',
  label: '',
  isDisabled: false,
  defaultValue: '',
  placeholder: '',
  resize: 'none',
  minHeight: 120,
  handleChange: () => { },
  errorMessage: '',
  register: null,
  required: false,
  number: null,
};

export default Textarea;
