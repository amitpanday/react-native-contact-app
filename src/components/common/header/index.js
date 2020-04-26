import React from 'react';
import { View, Text, Header, Button, Icon, Left, Body, Right } from 'native-base'
import { withNavigation } from 'react-navigation';

import styles from './styles'

const AppHeader = (props) => {
  const {
    title,
    showBackButton,
  } = props;

  return (
    <Header style={styles.header}>
      <View style={styles.headerRow}>
        <Left>
          {
            showBackButton === undefined ?
              <Button
                transparent
                onPress={() => props.navigation.toggleDrawer()}
              >
                <Icon name="menu" style={styles.menuIcon} />
              </Button>
              :
              <Button
                transparent
                onPress={() => props.navigation.goBack()}
              >
                <Icon name="arrow-back" style={styles.menuIcon} />
              </Button>
          }
        </Left>
        <Body>
          <Text style={styles.title}>{title}</Text>
        </Body>
        <Right />
      </View>
    </Header>
  )
}

export default withNavigation(AppHeader);