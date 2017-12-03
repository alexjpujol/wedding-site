import React from 'react';
import styled from 'styled-components';

import PhotoCard from './PhotoCard';
import Nav from './Nav';
import posters from '../photos.json';

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const Photos = () => (
    <div>
        <Nav />
        <Wrapper>
        {posters.photos.map((poster) => <PhotoCard key={poster.id} {...poster} />)}
        </Wrapper>

    </div>
)

export default Photos;