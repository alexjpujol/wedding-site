import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
    width: 100%;
    top: 0;
    border-bottom: 1px solid black;

    ul {
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        list-style-type: none;
    }

`;

const Nav = () => (
    <Wrapper>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/photos">Photos</Link></li>
            <li><Link to="/travel">Travel</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/registry">Registry</Link></li>
        </ul>
    </Wrapper>
)

export default Nav;