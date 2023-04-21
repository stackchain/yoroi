import {
  decrypt_with_password,
  encrypt_with_password,
} from '@emurgo/react-native-haskell-shelley';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const encryptData = async (
  plaintextHex: string,
  secretKey: string,
): Promise<string | undefined> => {
  const secretKeyHex = Buffer.from(secretKey, 'utf8').toString('hex');
  return encrypt_with_password(
    secretKeyHex,
    '2cf05d94db2cf05d94db2cf05d94dbaa2cf05d94db2cf05d94db2cf05d94dbaa',
    '2cf05d94db2cf052cf05d94d',
    plaintextHex,
  );
};

export const decryptData = async (
  ciphertext: string,
  secretKey: string,
): Promise<string | undefined> => {
  const secretKeyHex = Buffer.from(secretKey, 'utf8').toString('hex');
  return decrypt_with_password(secretKeyHex, ciphertext);
};

export default function App() {
  const [secret, setSecret] = React.useState<string | undefined>('');

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>The secret is: {secret}</Text>
      <Button
        title="Secret"
        onPress={() => {
          const plaintextHex = Buffer.from('hello world', 'utf8').toString(
            'hex',
          );
          encryptData(plaintextHex, 'password').then(ciphertext => {
            setSecret(ciphertext);
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
