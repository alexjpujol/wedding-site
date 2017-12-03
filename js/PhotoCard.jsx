import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
    width: 350px;
`;

const ImageWrapper = styled.div`
    margin: 2em;
`;

const PhotoCard = (props) => (
    <ImageWrapper>
        <Image alt={`${props.title}`} src={`/public/img/posters/${props.poster}`} />    
        <h3>{props.title}</h3>
        <h4>{props.location}</h4>
        <p>{props.description}</p>
    </ImageWrapper>
)

PhotoCard.propTypes = {
    title: string.isRequired,
    "location": string.isRequired,
    "poster" : string.isRequired,
    "description": string.isRequired
}

export default PhotoCard;