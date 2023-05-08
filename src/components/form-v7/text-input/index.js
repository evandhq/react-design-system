// @flow

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import {
  Input,
  LabelContainer,
  DescriptionContainer,
  PasswordIcon,
  Label,
} from './index.style';

type Props = {
  type?: 'text' | 'password',
  label?: string,
  htmlElementName: string,
  id?: string,
  placeholder?: string,
  disabled?: boolean,
  description?: string,
  errorMessage?: string,
  register?: any,
  required?: boolean | String,
}

const TextInput = (props: Props) => {
  const {
    type,
    label,
    htmlElementName,
    id,
    placeholder,
    disabled,
    description,
    errorMessage,
    register,
    required,
  } = props;
  const [value, setValue] = useState('');
  const [displayedPassword, setDisplayedPassword] = useState(false);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleDisplayPassword() {
    setDisplayedPassword(!displayedPassword);
  }

  function handleFocus(e) {
    e.target.setSelectionRange(0, 0);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Label htmlFor={id || `${type}-${htmlElementName.split(' ').join('')}`} data-test="text-input">
        {label && (
          <LabelContainer bold size={14}>
            {label}
            {!!required && <span className="required">*</span>}
          </LabelContainer>
        )}
        {description && (
          <DescriptionContainer bold size={10} color="gray" data-test="text-input-description">
            {description}
          </DescriptionContainer>
        )}
        <Input
          id={id || `${type}-${htmlElementName.split(' ').join('')}`}
          name={htmlElementName}
          type={displayedPassword || type === 'text' ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          {...register(htmlElementName, {
            onChange: handleChange,
            onFocus: handleFocus,
            disabled,
            required: !!required ? 'این فیلد الزامی است' : false
          })}
        />
        {type === 'password' && (
          <PasswordIcon
            name={displayedPassword ? 'visibility-off' : 'visibility'}
            color={displayedPassword ? 'blue' : 'gray'}
            onClick={handleDisplayPassword}
          />
        )}
      </Label>
      <ErrorMsg errorMessage={errorMessage} />
    </ThemeProvider>
  );
};

TextInput.defaultProps = {
  type: 'text',
  label: null,
  id: null,
  placeholder: null,
  disabled: false,
  description: null,
  errorMessage: '',
  register: null,
  required: false,
};

export default TextInput;
