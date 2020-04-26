import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Container, Fab, Icon } from 'native-base';

import Header from '../../common/header'
import styles from './styles';

class ContactList extends Component {

  renderListContact = (item) => {
    const { image, name, user_id } = item.item;
    return (
      <TouchableOpacity
        key={user_id}
        style={styles.item}
        onPress={() => this.props.navigation.navigate('UpdateContact', {
          user_id: user_id
        })}
      >
        <View style={styles.imageContent}>
          <View style={styles.image}>
            {image ?
              <Image source={image} style={styles.userImage} />
              :
              <Icon name={'person'} style={styles.userIcon} />
            }
          </View>
        </View>
        <View style={styles.titleContent}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  arrangedAscendingOrder = (x, y) => {
    const firstElement = x.name.toLowerCase();
    const secondElement = y.name.toLowerCase();
    if (firstElement < secondElement) {
      return -1;
    }
    if (firstElement > secondElement) {
      return 1;
    }
    return 0;
  }

  render() {
    let data = this.props.contactList.contact;
    data.sort(this.arrangedAscendingOrder);
    return (
      <Container>
        <Header title={'Contact List'} />
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={(item) => this.renderListContact(item)}
            keyExtractor={item => item.index}
          />
          <Fab
            style={styles.fabButton}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('CreateContact')}
          >
            <Icon name="md-add" style={styles.addIcon} />
          </Fab>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactList: state.CreateContact,
  }
};

export default connect(mapStateToProps)(ContactList);