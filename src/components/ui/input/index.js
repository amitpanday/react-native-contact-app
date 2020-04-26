import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const inputBox = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {props.children}
      </View>
      <View style={{ flex: 0.9, }}>
        <TextInput
          editable={props.editable}
          keyboardType={props.keyboardType}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          onBlur={props.onBlur}
          maxLength={props.maxLength}
          onSubmitEditing={props.onSubmitEditing}
          style={[styles.input, props.style]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width,
    height: 45,
    borderRadius: 50,
    margin: 5,
    elevation: 10
  },
  iconContainer: {
    flex: 0.2,
    justifyContent: 'center',
    height: 20,
  },
  input: {
    minWidth: '20%',
    minHeight: 45
  }
});

export default inputBox;
