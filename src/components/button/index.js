import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Text } from '../typography';
import {
  BaseButton,
  StyledIcon,
  ExternalLink,
  InternalLink,
} from './index.styles';
import { setFontColor } from './utils';
import theme from './theme';

const Button = (props) => {
  const {
    htmlType,
    icon,
    children,
    wide,
    disabled,
    size,
    mainColor,
    styleType,
    linkTo,
    linkTarget,
    isLoading,
    renderLink,
    ...rest
  } = props;
  const fontColor = setFontColor(styleType, mainColor);

  function RenderButtonContext() {
    return (
      <ThemeProvider theme={theme}>
        <BaseButton
          data-test="button"
          type={htmlType}
          wide={wide}
          size={size}
          mainColor={mainColor}
          disabled={disabled || isLoading}
          data-styletype={styleType}
          {...rest}
        >
          {
            icon
              && (
                <StyledIcon
                  name={icon}
                  size={size}
                  color={fontColor}
                />
              )
          }
          <Text
            size={theme.size[size].font}
            color={fontColor}
            bold
          >
            {isLoading ? 'صبر کنید...' : children}
          </Text>
        </BaseButton>
      </ThemeProvider>
    );
  }

  if ((linkTo || renderLink) && !disabled) {
    if (renderLink) {
      return (
        <InternalLink>
          {renderLink(<RenderButtonContext />)}
        </InternalLink>
      );
    }

    return (
      <ExternalLink href={linkTo} target={linkTarget}>
        <RenderButtonContext />
      </ExternalLink>
    );
  }

  return (
    <RenderButtonContext />
  );
};

Button.propTypes = {
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  mainColor: PropTypes.oneOf(['red', 'green', 'yellow', 'darkBlue', 'blue']),
  styleType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  linkTo: PropTypes.string,
  linkTarget: PropTypes.oneOf(['_self', '_blank']),
  isLoading: PropTypes.bool,
  renderLink: PropTypes.node,
};

Button.defaultProps = {
  htmlType: 'submit',
  icon: null,
  wide: false,
  disabled: false,
  size: 'md',
  mainColor: 'darkBlue',
  styleType: 'primary',
  linkTo: null,
  linkTarget: '_self',
  isLoading: false,
  renderLink: null,
};

export default Button;
