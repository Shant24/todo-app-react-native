import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';
import { COLORS } from '../../constants/style';

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const InputRef = useRef();

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue('');
      if (InputRef.current.isFocused()) {
        InputRef.current.blur();
      }
    } else {
      Alert.alert('This field is required!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={InputRef}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Enter Todo"
        placeholderTextColor={COLORS.whiteGrey}
        onSubmitEditing={handleSubmit}
        keyboardAppearance="dark"
        keyboardType="default"
        collapsable={true}
        autoCorrect={false}
        autoCapitalize="sentences"
      />

      <TouchableOpacity style={styles.button} onPressOut={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    marginRight: 20,
    padding: 10,
    paddingLeft: 0,
    flex: 1,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primarySemiDark,
    fontSize: 18,
    color: COLORS.white,
  },
  button: {
    width: 60,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primarySemiDark,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.white,
  },
});
