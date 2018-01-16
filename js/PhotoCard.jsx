import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    margin: 2em;
    width: 350px;
`;


const PhotoCard = props => (
  <ImageWrapper className="image_gallery">
    <img alt={`${props.title}`} src={`/public/img/posters/${props.poster}`} />
    <div className="photo_description">
      <h2>{props.location}</h2>
      <p>{props.description}</p>
    </div>
    <h3>{props.title}</h3>
  </ImageWrapper>
);

PhotoCard.propTypes = {
  title: string.isRequired,
  location: string.isRequired,
  poster: string.isRequired,
  description: string.isRequired
};

export default PhotoCard;
