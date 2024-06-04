import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {trigger} from 'react-native-haptic-feedback';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export const HapticFeedback = () => {
  // Optional configuration
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  };

  // Trigger haptic feedback
  trigger('impactLight', options);

  return (
    <View style={styles.container}>
      <Text onPress={() => trigger('notificationSuccess', options)}>
        Haptic feedback
      </Text>
      <Button
        title="Haptic feedback"
        onPress={() => trigger('effectHeavyClick', options)}
      />
    </View>
  );
};
