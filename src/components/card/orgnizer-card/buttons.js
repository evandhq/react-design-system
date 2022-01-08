import React, { useState } from 'react';
import Grid from 'styled-components-grid';
import Button from '../../button';
import { Margin } from '../../spacing';
import Responsive from '../../responsive';
import {
  LTRContainer,
  StyledButton,
} from './index.style';
import Display from '../../display';

type Props = {
  isFollowed: boolean,
  onClickFollowMe: () => boolean,
  onClickConnectUs: () => void,
}

const Buttons = (props: Props) => {
  const {
    onClickFollowMe,
    onClickConnectUs,
    isFollowed,
  } = props;
  const [isFollow, setFollowStatus] = useState(isFollowed);
  const [isLoading, setLoadingStatus] = useState(false);

  async function handleClickFollowMe() {
    setLoadingStatus(true);
    const updatedIsFollowStatus = await onClickFollowMe();
    setLoadingStatus(false);
    if (updatedIsFollowStatus) {
      setFollowStatus(!isFollowed);
    }
  }

  return (
    <>
      <Responsive option={{ greaterThan: '768px' }}>
        <LTRContainer>
          <StyledButton
            styleType="secondary"
            htmlType="button"
            mainColor="blue"
            size="sm"
            onClick={onClickConnectUs}
          >
            تماس
          </StyledButton>
          <StyledButton
            className="follow-button"
            styleType="primary"
            htmlType="button"
            size="sm"
            isLoading={isLoading}
            onClick={handleClickFollowMe}
          >
            {isFollow ? 'دنبال میکنید' : 'دنبال کنید'}
          </StyledButton>
        </LTRContainer>
      </Responsive>

      <Responsive option={{ lessThan: '768px' }}>
        <Display display="flex" justifyContent="center" width="100%">
          <Button
            styleType="secondary"
            htmlType="button"
            mainColor="blue"
            size="sm"
            onClick={onClickConnectUs}
            wide
          >
            تماس
          </Button>
          <Button
            className="follow-button"
            styleType="secondary"
            htmlType="button"
            size="sm"
            isLoading={isLoading}
            onClick={handleClickFollowMe}
            wide
          >
            {isFollow ? 'دنبال میکنید' : 'دنبال کنید'}
          </Button>
        </Display>
      </Responsive>
    </>
  );
};

export default Buttons;
