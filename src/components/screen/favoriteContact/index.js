import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, Image } from 'react-native';
import { Container, Icon } from 'native-base';

import Header from '../../common/header'
import styles from './styles';

class FavoriteContactList extends Component {

  renderListContact = (item) => {
    const { image, name, user_id } = item.item;
    return (
      <View
        key={user_id}
        style={styles.item}
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
      </View>
    )
  }

  render() {
    let favUserData = new Array();
    const data = this.props.contactList.contact;
    data.find(res => {
      if (res.fav === true) {
        favUserData.push(res);
      }
    });

    return (
      <Container>
        <Header title={'Favorite Contact List'} showBackButton={true} />
        <View style={styles.container}>
          <FlatList
            data={favUserData}
            renderItem={(item) => this.renderListContact(item)}
            keyExtractor={item => item.index}
          />
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

export default connect(mapStateToProps)(FavoriteContactList);