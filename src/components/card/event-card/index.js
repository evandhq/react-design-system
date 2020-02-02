// @flow

import React, { useState } from 'react';
import { VERTICAL_CARD, HORIZONTAL_CARD } from './constants';
import CardTemplate from '../card-template';
import ShowDate from '../../show-date';
import Avatar from '../../avatar';
import Cover from '../../cover';
import ProductProperties from '../../product-properties';
import {
  Link,
  VerticalContentContainer,
  DateBookmarkContainer,
  BookmarkIcon,
  Title,
  OrganizationLink,
  OrganizationName,
  HorizontalCardContainer,
  CoverCointainer,
  HorizontalContentContainer,
} from './index.style';

type Props = {
  title: string,
  bookmarked?: boolean,
  type?: VERTICAL_CARD | HORIZONTAL_CARD,
  price: string,
  place: string,
  date: string | Object,
  cover: String,
  organization: ?{
    name: string,
    logo: string,
    slug: string,
  },
  linkTo?: string,
  queryString?: string,
  renderLink?: * => Node,
  onClickBookmark: () => void,
}

const EventCard = (props: Props) => {
  const {
    title,
    type,
    bookmarked,
    price,
    place,
    date,
    cover,
    organization,
    onClickBookmark,
    linkTo,
    renderLink,
    queryString,
  } = props;

  const [isBookmarked, setBookmark] = useState(bookmarked);
  const productPropertiesList = [
    { iconName: 'place', text: place },
    { iconName: 'loyalty', text: price },
  ];

  const handleClickBookmark = (e) => {
    e.preventDefault();
    setBookmark(!isBookmarked);
    onClickBookmark();
  };

  const renderVerticalCard = () => (
    <CardTemplate
      direction={type}
      hoverToLevel={3}
      maxWidth={270}
    >
      <Cover
        src={cover}
        renderLink={renderLink}
      />
      <VerticalContentContainer data-test="vertical-content">
        <div>
          <DateBookmarkContainer data-test="vertical-date-bookmark">
            <ShowDate date={date} color="gray" fontSize="12" />
            <BookmarkIcon
              name={isBookmarked ? 'bookmark' : 'bookmark-border'}
              size="lg"
              color="gray"
              onClick={handleClickBookmark}
            />
          </DateBookmarkContainer>
          <Link to={`${linkTo}${queryString.length > 0 ? `?${queryString}` : ''}`}><Title level={2} size="sm">{title}</Title></Link>
          <ProductProperties list={productPropertiesList} />
        </div>
        {organization && (
          <OrganizationLink to={`organizations/${organization.slug}`}>
            <Avatar src={organization.logo} size="sm" />
            <OrganizationName size="12">{organization.name}</OrganizationName>
          </OrganizationLink>
        )}
      </VerticalContentContainer>
    </CardTemplate>
  );

  const renderHorizontalCard = () => (
    <HorizontalCardContainer
      direction={type}
      hoverToLevel={3}
      maxWidth={560}
    >
      <CoverCointainer
        src={cover}
        renderLink={renderLink}
      />
      <HorizontalContentContainer data-test="horizontal-content">
        <DateBookmarkContainer>
          <ShowDate date={date} color="gray" fontSize="12" />
          <BookmarkIcon
            name={isBookmarked ? 'bookmark' : 'bookmark-border'}
            size="lg"
            color="gray"
            onClick={handleClickBookmark}
          />
        </DateBookmarkContainer>
        <Link to={`${linkTo}${queryString.length > 0 ? `?${queryString}` : ''}`}><Title level={2} size="sm">{title}</Title></Link>
        <ProductProperties list={productPropertiesList} isHorizontal />
      </HorizontalContentContainer>
    </HorizontalCardContainer>
  );

  const renderCard = () => {
    switch (type) {
      case HORIZONTAL_CARD:
        return renderHorizontalCard();
      case VERTICAL_CARD:
      default:
        return renderVerticalCard();
    }
  };

  return (
    renderCard()
  );
};

EventCard.defaultProps = {
  bookmarked: false,
  type: VERTICAL_CARD,
  queryString: '',
  renderLink: null,
};

export default EventCard;
