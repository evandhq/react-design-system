import React from 'react';
import { Controller } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import Icon from '../../icon';
import Button from '../../button';
import Label from '../label';
import { Input } from '../text-input/index.style';
import Display from '../../display';

type Props = {
  htmlElementName: String,
  label: String,
  imageUrl: string,
  register: UseFormRegister<FieldValues>;
  control: FormData;
  classNames?: String,
  fetchData: () => {},
  loading?: boolean,
  number?: number,
};

function Captcha(props: Props) {
  const {
    htmlElementName,
    label,
    classNames,
    imageUrl,
    register,
    control,
    fetchData,
    setValue,
    loading,
    number,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <div className={classNames}>
        <Controller
          name={htmlElementName}
          control={control}
          rules={{ required: 'این فیلد اجباری است' }}
          render={({
            fieldState,
          }) => (
            <Display display="block">
              <Label htmlFor={htmlElementName} label={label} number={number} required />
              <Display display="flex">
                <Display display="flex" width="100%">
                  <Input
                    id={`${'text'}-${htmlElementName.split(' ').join('')}`}
                    name={htmlElementName}
                    type="text"
                    rtl={false}
                    // onChange={(e) => onChange(e.target.value.replace(/[٠-٩۰-۹]/g, (a) => a.charCodeAt(0) && 15))}
                    className="captcha-input"
                    {...register(htmlElementName, {
                      pattern: {
                        value: /^[۰۱۲۳۴۵۶۷۸۹0-9]{4}$/,
                        message: 'لطفا اعداد انگلیسی وارد کنید.',
                      },
                      onChange: (e) => setValue(htmlElementName, e.target.value.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, (c) => c.charCodeAt(0) & 0xf)),
                    })}
                  />
                  <img
                    width="auto"
                    height="40px"
                    src={imageUrl}
                    alt="captcha-img"
                    loading="lazy"
                    data-test="captcha-img"
                  />
                </Display>
                <Button type="button" size="sm" styleType="tertiary" onClick={fetchData} disabled={loading}>
                  <Icon name={loading ? 'loading' : 'refresh'} />
                </Button>
              </Display>
              <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
            </Display>
          )}
        />

      </div>
    </ThemeProvider>
  );
}

Captcha.defaultProps = {
  classNames: '',
  loading: false,
  number: null,
};

export default Captcha;
