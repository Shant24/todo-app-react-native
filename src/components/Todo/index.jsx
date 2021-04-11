import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../constants/style';

const Todo = ({ todo: { title, id }, onClear }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={() => onClear(id)}
      activeOpacity={0.5}
    >
      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity
        style={styles.removeBtnWrapper}
        onPressOut={() => onClear(id)}
      >
        <Icon name="times-circle" size={20} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 2,
    borderLeftColor: COLORS.primarySemiDark,
    borderStyle: 'solid',
  },
  text: {
    paddingVertical: 5,
    fontSize: 16,
    color: COLORS.white,
  },
  removeBtnWrapper: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});

export default Todo;
