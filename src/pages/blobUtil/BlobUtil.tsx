import React, {useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
  image: {
    width: '80%',
    height: undefined,
    aspectRatio: 3,
    marginTop: 20,
  },
});

export const BlobUtil = () => {
  // const [data, setData] = useState<string | null>(null);

  // const fs = RNFetchBlob.fs;

  // console.log(fs.asset('../../assets/react_image.png'));

  // RNFetchBlob.fs
  //   .readFile(fs.asset('../../assets/react_image.png'), 'base64')
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(e => console.log(e));

  const [blob, setBlob] = useState(null);

  const convertImageToBlob = async () => {
    try {
      const url = ReactNativeBlobUtil.wrap(
        ReactNativeBlobUtil.fs.asset('react_image.png'),
      );
      console.log('jjjjj', url);
      const imagePath = ReactNativeBlobUtil.fs.asset('react_image.png');

      console.log(imagePath);

      const imageBlob = await ReactNativeBlobUtil.fs.ls(
        'ReactNativeBlobUtil-file://',
      );
      console.log('imageBlob', imageBlob);
      // setBlob(imageBlob);
      // console.log('Image converted to Blob:', imageBlob);
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Исходная картинка:</Text>
      <Image
        source={require('../../../assets/react_image.png')}
        style={styles.image}
      />

      <Button title="Convert Image to Blob" onPress={convertImageToBlob} />
      <Text style={styles.text}>Данные из Blob: {blob}</Text>
      {/* <Image source={{uri: base64Image}} style={styles.image} /> */}
    </ScrollView>
  );
};
