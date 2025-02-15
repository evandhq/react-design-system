import React from 'react';
import { useForm } from 'react-hook-form';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  select,
  text,
  boolean,
} from '@storybook/addon-knobs';
import TextInput from './index';

storiesOf('Form-V7/Inputs', module)
  .add('Full option Text Input', () => {
    const {
      register,
      control,
    } = useForm();
    return (
      <TextInput
        htmlElementName="text-name-02"
        required
        label={text('optional label', 'این لیبل است')}
        number={23}
        register={register}
        control={control}
        placeholder={text('optional placeholder', 'متن پیشفرض')}
        disabled={boolean('disabled(default : false)', false)}
        description={text('optional description', 'توضیحات اضافه')}
        errorMessage={text('optional error msg', 'ارور زیبا')}
        type={select('select type(default : text)', ['text', 'password'])}
      />
    );
  })
  .add('LTR Text Input', () => {
    const {
      register,
    } = useForm();
    return (
      <TextInput
        htmlElementName="text-name-02"
        required
        label={text('optional label', 'این لیبل است')}
        number={23}
        register={register}
        placeholder={text('optional placeholder', 'متن پیشفرض')}
        disabled={boolean('disabled(default : false)', false)}
        description={text('optional description', 'توضیحات اضافه')}
        errorMessage={text('optional error msg', 'ارور زیبا')}
        type={select('select type(default : text)', ['text', 'password'])}
        rtl={false}
      />
    );
  })
  .add('Password input', () => {
    const {
      register,
      control,
    } = useForm();
    return (
      <TextInput
        htmlElementName="text-name-03"
        required
        label={text('optional label', 'این لیبل است')}
        number={23}
        register={register}
        control={control}
        placeholder={text('optional placeholder', 'متن پیشفرض')}
        disabled={boolean('disabled(default : false)', false)}
        description={text('optional description', 'توضیحات اضافه')}
        errorMessage={text('optional error msg', 'ارور زیبا')}
        type="password"
      />
    );
  })
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
