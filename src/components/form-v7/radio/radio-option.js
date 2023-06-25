import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../typography';
import { Input } from './index.style';
import theme from '../theme';

type Props = {
  label: string,
  value: string,
  groupName: string,
  isDisabled?: boolean,
  defaultCheckedValue?: string,
  register?: any,
};
const RadioOption = (props: Props) => {
  const {
    label, value, isDisabled, defaultCheckedValue, groupName, register,
  } = props;
  const itemId = `${groupName}-${value}-${label.split(' ').join('')}`;

  return (
    <ThemeProvider theme={theme}>
      <label htmlFor={itemId}>
        <Input
          type="radio"
          id={itemId}
          name={groupName}
          defaultValue={value}
          defaultChecked={defaultCheckedValue === value}
          {...register(groupName, {
            disabled: isDisabled,
          })}
        />
        <Text size={14}>
          {label}
        </Text>
      </label>
    </ThemeProvider>
  );
};

RadioOption.defaultProps = {
  isDisabled: false,
  defaultCheckedValue: '',
  register: null,
};

export default RadioOption;
