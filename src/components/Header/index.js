import React from 'react'
import { Container } from './styles';
import ImgLogo from '../../assets/logo.png';

export default function Header() {
    return (
        <Container>
            <img src={ImgLogo} alt="tddevfy"/>
        </Container>
    )
}
