import React, {useEffect, useState} from 'react';
import {Button, Image, ScrollView, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const SkeletonPlaceholderComponent = () => {
  const [option, setOption] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const updateTimer = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollView>
      <View>
        {option ? (
          <SkeletonPlaceholder borderRadius={4}>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={60}
                height={60}
                borderRadius={50}
              />
              <SkeletonPlaceholder.Item marginLeft={20}>
                <SkeletonPlaceholder.Item width={120} height={20} />
                <SkeletonPlaceholder.Item
                  marginTop={6}
                  width={80}
                  height={20}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        ) : (
          <SkeletonPlaceholder borderRadius={4} enabled={loading}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 100, height: 100, borderRadius: 50}}></View>
              <View style={{marginLeft: 20}}>
                <Image
                  style={{width: 120, height: 20}}
                  source={require('../../../assets/react_image.png')}
                />
                <Text style={{marginTop: 6, fontSize: 14, lineHeight: 18}}>
                  Hello world asdf.askdjfhaslkdjfhaslkdfjh
                </Text>
              </View>
            </View>
          </SkeletonPlaceholder>
        )}
      </View>

      <View
        style={{
          marginTop: 20,
          justifyContent: 'space-between',
          gap: 10,
        }}>
        <Button
          title="Skeleton Placeholder options 1/2"
          onPress={() => {
            setOption(!option);
          }}
        />

        <Button title="update timer" onPress={updateTimer} />
      </View>
    </ScrollView>
  );
};
