import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/style';

const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Android {props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingBottom: 10,
    width: '100%',
    height: 80,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDark,
  },
  text: {
    color: COLORS.white,
    fontSize: 25,
  },
});

export default Navbar;
