import {ConfigContext, ExpoConfig} from 'expo/config'

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  owner: 'stackchain',
  name: 'yoroi',
  slug: 'yoroi',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  platforms: ['ios', 'android', 'web'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'io.emurgo.yoroi',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'io.emurgo.yoroi',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    yoroi: {
      commit: process.env.YOROI_COMMIT,
    },
    eas: {
      projectId: '078737b7-5d8c-43a1-a26b-de8e1e4c0e71',
    },
  },
  plugins: ['expo-build-properties'],
})
