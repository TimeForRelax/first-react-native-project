import {StyleSheet} from 'react-native';

export const styles = (
  top: number,
  bottom: number,
  left: number,
  right: number,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a2a2a2',
      borderWidth: 1,

      paddingTop: top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
    },
    circle: {
      width: 60,
      height: 60,
      backgroundColor: '#000000',
      borderRadius: 30,
    },
  });
