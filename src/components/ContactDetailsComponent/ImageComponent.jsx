import React, {useRef, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ImageComponent = ({src}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const ref = useRef(null);

  const onLoadStart = () => {
    setIsLoading(true);
  };
  const onLoadEnd = () => {
    setTimeout(() => {}, 1000);
    setIsLoading(false);
  };
  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <View style={styles.imageContainer}>
      {isLoading && (
        <View style={styles.loading}>
          <Text>Загрузка изображения</Text>
        </View>
      )}
      <View>
        <Image
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onError}
          style={styles.detailPhoto}
          source={{uri: src}}
        />
      </View>
    </View>
  );
};

export default ImageComponent;
