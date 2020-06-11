import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import QRCode from 'react-native-qrcode-svg'

import { Container, Code, Nav, NavItem, NavText, SingOutButton, SingOutButtonText, } from './styles'

export default function Menu({ translateY }) {
  return ( 
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}>
        <Code>
          <QRCode 
            value="https://rocketseat.com.br"
            size={80}
            bgColor="#fff"
            fgColor="#8b10ae"
          />
        </Code>

        <Nav>

          <NavItem>
            <Icon name="help-outline" size={20} color="#fff"/>
            <NavText>Ajuda</NavText>
          </NavItem>

          <NavItem>
            <Icon name="person-outline" size={20} color="#fff"/>
            <NavText>Perfil</NavText>
          </NavItem>

          <NavItem>
            <Icon name="credit-card" size={20} color="#fff"/>
            <NavText>Configuração do cartão</NavText>
          </NavItem>

          <NavItem>
            <Icon name="smartphone" size={20} color="#fff"/>
            <NavText>Configurações do app</NavText>
          </NavItem>

        </Nav>

        <SingOutButton onPress={() => {}}>
          <SingOutButtonText>SAIR DO APP</SingOutButtonText>
        </SingOutButton>
    </Container>
  )
}