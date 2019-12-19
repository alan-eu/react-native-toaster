import { Platform } from 'react-native'

import Toaster from './Toaster'
import ToastStylesIOS from './ToastStyles.ios.js'
import ToastStylesAndroid from './ToastStyles.android.js'

const ToastStyles = Platform.OS === 'ios' ? ToastStylesIOS : ToastStylesAndroid

export default Toaster
export { ToastStyles }
