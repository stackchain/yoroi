/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
global.Buffer = require('safe-buffer').Buffer;

AppRegistry.registerComponent(appName, () => App);
