import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Icon } from 'native-base';
import styles from './style';

const data = [
  { id: 1, title: "Contact List Screen", route: "ContactList", icon: "md-person" },
  { id: 2, title: "Favorite Contacts", route: "FavortiteList", icon: "md-star" },
];

const sideBar = (props) => {

  const element = data.map((item, key) => {
    return (
      <TouchableOpacity
        key={key}
        style={styles.menuList}
        onPress={() => props.navigation.navigate(item.route)}
      >
        <Icon name={item.icon} style={styles.menuicon} />
        <View style={styles.menuTitle}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <Container style={styles.container}>
      {element}
    </Container>
  );
}

export default sideBar;