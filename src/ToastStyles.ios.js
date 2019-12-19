import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const base = {
  container: {
    paddingTop: getStatusBarHeight(),
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold'
  }
}

export default {
  info: StyleSheet.create({
    container: StyleSheet.flatten([base.container, { backgroundColor: '#2487DB' }]),
    text: base.text
  }),
  success: StyleSheet.create({
    container: StyleSheet.flatten([base.container, { backgroundColor: 'green' }]),
    text: base.text
  }),
  warning: StyleSheet.create({
    container: StyleSheet.flatten([base.container, { backgroundColor: '#ec971f' }]),
    text: base.text
  }),
  error: StyleSheet.create({
    container: StyleSheet.flatten([base.container, { backgroundColor: 'red' }]),
    text: base.text
  })
}
