/**
 * @format
 */

import {AppRegistry, Text, TextInput, TouchableOpacity} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (Text.defaultProps == null) {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
  TextInput.defaultProps.autoComplete = 'off';
}

if (TouchableOpacity.defaultProps == null) {
  TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
  TouchableOpacity.defaultProps.activeOpacity = 0.5;
}

AppRegistry.registerComponent(appName, () => App);
