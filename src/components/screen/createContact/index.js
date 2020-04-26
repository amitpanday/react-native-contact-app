import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
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

class CreateContact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fav: false,
      image: '',
      name: '',
      phone: '',
      landLine: ''
    }
  }

  saveUserData = () => {
    const { createContact, contact } = this.props;
    const userId = contact.contact.length;
    const data = {
      user_id: userId + 1,
      fav: this.state.fav,
      image: this.state.image,
      name: this.state.name,
      phone: this.state.phone,
      landLine: this.state.landLine
    };
    createContact.create(data);
    this.setState({
      fav: false,
      image: false,
      name: '',
      phone: '',
      landLine: ''
    });
  }

  uploadImage = () => {
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
        <Header title={'Add New Contact'} showBackButton={true} />
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
                onPress={() => this.uploadImage()}
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
                placeholder={'Enter Enter LandLine Number'}
                maxLength={50}
                keyboardType={'number-pad'}
                value={this.state.landLine}
                onChangeText={(landLine) => this.setState({ landLine })}
                onSubmitEditing={() => this.saveUserData()}
              >
                <Icon name={'md-call'} style={styles.inputIcon} />
              </Input>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => this.saveUserData()}
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
    createContact: bindActionCreators(actions.Contact, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact);