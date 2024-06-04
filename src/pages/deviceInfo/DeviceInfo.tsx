import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  getUniqueId,
  getManufacturer,
  getApplicationName,
  getBrand,
  getBatteryLevel,
  getHost,
  getPowerState,
} from 'react-native-device-info';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export const DeviceInfoComponent = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [hostname, setHostname] = useState('');
  const [powerState, setPowerState] = useState<any>(null);

  useEffect(() => {
    getUniqueId().then(data => setUniqueId(data));
    getManufacturer().then(data => setManufacturer(data));
    getBatteryLevel().then(data => setBatteryLevel(data));
    getHost().then(data => setHostname(data));
    getPowerState().then(data => setPowerState(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text>имя проекта: {getApplicationName()}</Text>
      <Text>уникальный ID: {uniqueId}</Text>
      <Text>производитель: {manufacturer}</Text>
      <Text>имя бренда: {getBrand()}</Text>
      <Text>имя бренда: {batteryLevel}</Text>
      <Text>имя хоста: {hostname}</Text>
      <Text>
        Информация о питании: {powerState?.batteryLevel},{' '}
        {powerState?.batteryState},{powerState?.lowPowerMode.toString()}
      </Text>
    </View>
  );
};
