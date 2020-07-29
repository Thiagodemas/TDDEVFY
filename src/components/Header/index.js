import React from 'react'
import { Container, Logo } from './styles';
import ImgLogo from '../../assets/logo.png';

export default function Header() {
    return (
        <Container>
            <Logo className={Logo} src={ImgLogo} alt="tddevfy"/>
        </Container>
    )
}
