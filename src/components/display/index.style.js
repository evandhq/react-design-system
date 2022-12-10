import styled from 'styled-components';
import defaultTheme from '../themes';

export const Flex = styled.div`
  display: flex;
  ${({ justifyContent }) => (justifyContent
    ? `justify-content: ${justifyContent}`
    : ''
  )}
  ${({ alignItems }) => (alignItems
    ? `align-items: ${alignItems}`
    : ''
  )}
`;

export const Block = styled.div`
  display: block;
`;

export const DisplayStyle = styled.div`
  ${({ display }) => (display
    ? `display: ${display};`
    : ''
  )}
  ${({ width }) => (width
    ? `width: ${width};`
    : ''
  )}
  ${({ justifyContent }) => (justifyContent
    ? `justify-content: ${justifyContent};`
    : ''
  )}
  ${({ alignItems }) => (alignItems
    ? `align-items: ${alignItems};`
    : ''
  )}
  ${({ flexDirection }) => (flexDirection
    ? `flex-direction: ${flexDirection};`
    : ''
  )}

  ${({ flexDirectionMobile }) => (flexDirectionMobile
    ? `@media only screen and (max-width: ${defaultTheme.breakpoints.sm}px) {
        flex-direction: ${flexDirectionMobile};
      }`
    : ''
  )}
  ${({ wrap }) => (wrap
    ? 'flex-wrap: wrap;'
    : ''
  )}
`;
