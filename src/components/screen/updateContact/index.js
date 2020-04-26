import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { Container, Fab, Icon, Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../store/actions';
import { Input } from '../../ui';
import Header from '../../common/header'
import styles from './styles';

const options = {
  title: 'Choose Options',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class UpdateContact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      fav: false,
      image: '',
      name: '',
      phone: '',
      landLine: ''
    }
  }

  componentDidMount() {
    const { contact, navigation } = this.props;
    const contactsData = contact.contact;
    const userId = navigation.getParam('user_id');
    const userData = contactsData.find(res => res.user_id === userId);
    this, this.setState({
      user_id: userData.user_id,
      fav: userData.fav,
      image: userData.image,
      name: userData.name,
      phone: userData.phone,
      landLine: userData.landLine
    });
  }

  updateUserData = () => {
    const { contact, navigation, updateContact } = this.props;
    const contactsData = contact.contact;
    const userId = navigation.getParam('user_id');
    const objIndex = contactsData.findIndex((res => res.user_id == userId));
    contactsData[objIndex].fav = this.state.fav;
    contactsData[objIndex].image = this.state.image;
    contactsData[objIndex].name = this.state.name;
    contactsData[objIndex].phone = this.state.phone;
    contactsData[objIndex].landLine = this.state.landLine;
    updateContact.update(contactsData);
    ToastAndroid.show('Details Update', ToastAndroid.LONG);
  }

  deleteUserData = () => {
    const { contact, navigation, updateContact } = this.props;
    let contactsData = contact.contact;
    const userId = navigation.getParam('user_id');
    const objIndex = contactsData.findIndex((res => res.user_id == userId));
    contactsData.splice(objIndex, 1);
    updateContact.update(contactsData);
    navigation.navigate('ContactList');
    ToastAndroid.show('Contact Delete Succefully!', ToastAndroid.LONG);
  }

  updateImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: 'data:image/jpeg;base64,' + response.data }
        this.setState({
          image: source,
        });
      }
    });
  }

  render() {
    let activefavIcon;
    if (this.state.fav) {
      activefavIcon = { ...styles.favIcon, ...styles.activeFavIcon };
    } else {
      activefavIcon = { ...styles.favIcon };
    }

    return (
      <Container>
        <Header title={'Update Contact'} showBackButton={true} />
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Fab
              style={styles.fabButton}
              position="topRight"
              onPress={() => this.setState({ fav: !this.state.fav })}
            >
              <Icon name="md-star" style={activefavIcon} />
            </Fab>
            <View style={styles.uploadImage}>
              <TouchableOpacity
                onPress={() => this.updateImage()}
              >
                {this.state.image ?
                  <Image source={this.state.image} style={styles.uploadedImage} />
                  :
                  <Icon name={'camera'} style={styles.cameraIcon} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Input
                style={styles.input}
                placeholder={'Enter Name'}
                maxLength={50}
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}
              >
                <Icon name={'md-person'} style={styles.inputIcon} />
              </Input>
              <Input
                style={styles.input}
                keyboardType={'number-pad'}
                placeholder={'Enter Mobile Nubmer'}
                maxLength={13}
                value={this.state.phone}
                onChangeText={(phone) => this.setState({ phone })}
              >
                <Icon name={'md-phone-portrait'} style={styles.inputIcon} />
              </Input>
              <Input
                style={styles.input}
                keyboardType={'number-pad'}
                placeholder={'Enter Enter LandLine Number'}
                maxLength={50}
                value={this.state.landLine}
                onChangeText={(landLine) => this.setState({ landLine })}
                onSubmitEditing={() => this.updateUserData()}
              >
                <Icon name={'md-call'} style={styles.inputIcon} />
              </Input>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => this.deleteUserData()}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </Button>
              <Button
                style={styles.button}
                onPress={() => this.updateUserData()}
              >
                <Text style={styles.buttonText}>Save</Text>
              </Button>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {

  return {
    contact: state.CreateContact,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    updateContact: bindActionCreators(actions.Contact, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContact);