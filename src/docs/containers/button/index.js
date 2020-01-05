import React from 'react';
import styled from 'styled-components';

import { Typography, Button } from '../../../components';

const { Heading, Link } = Typography;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ButtonPage = () => (
  <>
    <Heading level={1}>
      دکمه ها
    </Heading>
    <br />
    <br />

    <Heading level={2}>
      نمونه دکمه پیشفرض
    </Heading>
    <Button>
      دکمه
    </Button>
    <br />

    <Heading level={2}>
      دکمه آیکون دار
    </Heading>
    <Button icon="watch_later">
      دکمه آیکون دار
    </Button>
    <br />

    <Heading level={2}>
      دکمه full-width
    </Heading>
    <Button wide size="sm">
      دکمه full-width (sm size)
    </Button>
    <Button wide>
      دکمه full-width(md size - default)
    </Button>
    <Button wide size="lg">
      دکمه full-width(lg size)
    </Button>
    <br />

    <Heading level={2}>
      دکمه در اندازه های متفاوت
    </Heading>

    <Heading level={3}>
      sm size
    </Heading>
    <Button size="sm">
      دکمه
    </Button>
    <Button size="sm" icon="watch_later">
      دکمه
    </Button>
    <br />

    <Heading level={3}>
      md size (default)
    </Heading>
    <Button size="md">
      دکمه
    </Button>
    <Button size="md" icon="watch_later">
      دکمه
    </Button>
    <br />

    <Heading level={3}>
      lg size
    </Heading>
    <Button size="lg">
      دکمه
    </Button>
    <Button size="lg" icon="watch_later">
      دکمه
    </Button>
    <br />

    <Heading level={2}>
      دکمه ها در استایل ها متفاوت و رنگ های متفاوت
    </Heading>
    <Heading level={3}>
      رنگ قرمز
    </Heading>
    <Heading level={4}>
      رنگ قرمز - normal
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later" backgroundColor="red">
        دکمه primary (default)
      </Button>
      <Button styleType="secondary" icon="watch_later" backgroundColor="red">
        دکمه secondary
      </Button>
      <Button styleType="tertiary" icon="watch_later" backgroundColor="red">
        دکمه tertiary
      </Button>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ قرمز - disabled
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later" backgroundColor="red" disabled>
        دکمه primary (default) - disabled
      </Button>
      <Button styleType="secondary" icon="watch_later" backgroundColor="red" disabled>
        دکمه secondary - disabled
      </Button>
      <Button styleType="tertiary" icon="watch_later" backgroundColor="red" disabled>
        دکمه tertiary - disabled
      </Button>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ سبز
    </Heading>
    <Heading level={4}>
      رنگ سبز - normal
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later" backgroundColor="green">
        دکمه primary (default)
      </Button>
      <Button styleType="secondary" icon="watch_later" backgroundColor="green">
        دکمه secondary
      </Button>
      <Button styleType="tertiary" icon="watch_later" backgroundColor="green">
        دکمه tertiary
      </Button>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ سبز - disabled
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later" backgroundColor="green" disabled>
        دکمه primary (default) - disabled
      </Button>
      <Button styleType="secondary" icon="watch_later" backgroundColor="green" disabled>
        دکمه secondary - disabled
      </Button>
      <Button styleType="tertiary" icon="watch_later" backgroundColor="green" disabled>
        دکمه tertiary - disabled
      </Button>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ زرد
    </Heading>
    <Heading level={4}>
      رنگ زرد - normal
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later" backgroundColor="yellow">
        دکمه primary (default)
      </Button>
      <Button styleType="secondary" icon="watch_later" backgroundColor="yellow">
        دکمه secondary
      </Button>
      <Button styleType="tertiary" icon="watch_later" backgroundColor="yellow">
        دکمه tertiary
      </Button>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ زرد - disabled
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later" backgroundColor="yellow" disabled>
        دکمه primary (default) - disabled
      </Button>
      <Button styleType="secondary" icon="watch_later" backgroundColor="yellow" disabled>
        دکمه secondary - disabled
      </Button>
      <Button styleType="tertiary" icon="watch_later" backgroundColor="yellow" disabled>
        دکمه tertiary - disabled
      </Button>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ آبی
    </Heading>
    <Heading level={4}>
      رنگ آبی - normal
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later" backgroundColor="blue">
        دکمه primary (default)
      </Button>
      <Button styleType="secondary" icon="watch_later" backgroundColor="blue">
        دکمه secondary
      </Button>
      <Button styleType="tertiary" icon="watch_later" backgroundColor="blue">
        دکمه tertiary
      </Button>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ آبی - disabled
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later" backgroundColor="blue" disabled>
        دکمه primary (default) - disabled
      </Button>
      <Button styleType="secondary" icon="watch_later" backgroundColor="blue" disabled>
        دکمه secondary - disabled
      </Button>
      <Button styleType="tertiary" icon="watch_later" backgroundColor="blue" disabled>
        دکمه tertiary - disabled
      </Button>
    </ButtonWrapper>
    <hr />
    <Heading level={3}>
      رنگ آبی تیره - پیشفرض
    </Heading>
    <Heading level={4}>
      رنگ آبی تیره - پیشفرض - normal
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later">
        دکمه primary (default)
      </Button>
      <Button styleType="secondary" icon="watch_later">
        دکمه secondary
      </Button>
      <Button styleType="tertiary" icon="watch_later">
        دکمه tertiary
      </Button>
    </ButtonWrapper>
    <Heading level={4}>
      رنگ آبی تیره - پیشفرض - disabled
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later" disabled>
        دکمه primary (default) - disabled
      </Button>
      <Button styleType="secondary" icon="watch_later" disabled>
        دکمه secondary - disabled
      </Button>
      <Button styleType="tertiary" icon="watch_later" disabled>
        دکمه tertiary - disabled
      </Button>
    </ButtonWrapper>
    <br />

    <Heading level={2}>
      دکمه لینک دار
    </Heading>
    <ButtonWrapper>
      <Button styleType="primary" icon="watch_later">
        <Link to="http://yahoo.com" external>
          تکست ساده لینک خارجی
        </Link>
      </Button>
      <Button styleType="secondary" icon="watch_later">
        <Link to="http://yahoo.com" external>
          تکست ساده لینک خارجی
        </Link>
      </Button>
      <Button styleType="tertiary" icon="watch_later">
        <Link to="http://yahoo.com" external>
          تکست ساده لینک خارجی
        </Link>
      </Button>
    </ButtonWrapper>

  </>
);

export default ButtonPage;
