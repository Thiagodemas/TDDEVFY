import React from 'react'

import { Container, Label } from './styles';

export default function Card() {
    return (
        <Container>
            <header>
                <Label  color="#c71552" />
            </header>
            <p>
                Fazer a migração completa de servidor
            </p>
          <img src="https://raw.githubusercontent.com/Thiagodemas/thiagodemas/master/oct-thiago.png" alt="Avatar"/>
        </Container>
    )
}
