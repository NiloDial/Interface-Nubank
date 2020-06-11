import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles'

export default function Main() {
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent:{
          translationY: translateY,
        }
      }
    ],
    { useNativeDrive: true },
  )

  function onHandlerStateChange(event) {

  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange:[0, 380],
                outputRange: [0, 380],
                extrapolate: 'clamp',
              }),
            }],
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666"/>
              <Icon name="visibility-off" size={28} color="#666"/>
            </CardHeader>

            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 1.333.333,03</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Transferência de R$ 130,50 recebida de Carlos Henrique Hoje às 15:33
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY}/>
    </Container>
  )
}
