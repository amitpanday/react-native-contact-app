import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  formContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: (width / 20)
  },
  uploadImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: (width / 3),
    width: (width / 3),
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
    marginTop: (width / 8),
    backgroundColor: '#fff',
    elevation: 10,
    opacity: 0.9,
    padding: (width / 20)
  },
  cameraIcon: {
    fontSize: (width / 6),
    color: '#000',
    opacity: 0.6
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: (width / 20)
  },
  input: {
  },
  inputIcon: {
    alignSelf: 'center',
    fontSize: (width / 12),
    opacity: 0.8
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: (width / 20)
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: (width / 3),
    height: (width / 7),
    backgroundColor: '#347aeb',
    elevation: 10,
    opacity: 0.8,
    marginHorizontal: (width / 21),
    marginTop: (width / 12),
  },
  buttonText: {
    fontSize: (width / 15),
    color: '#fff'
  },
  fabButton: {
    width: (width / 9),
    height: (width / 9),
    marginBottom: (width / 10)
  },
  favIcon: {
    fontSize: (width / 15),
    color: '#fff'
  },
  activeFavIcon: {
    color: 'yellow'
  },
  uploadedImage: {
    height: (width / 3),
    width: (width / 3),
    borderRadius: 100,
    resizeMode: 'cover'
  }
});

export default styles;