import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RoutesNames} from '../enums/RoutesNames';
import {
  BlobUtil,
  Home,
  Reanimated,
  LinearGradientComponent,
  DeviceInfoComponent,
  HapticFeedback,
  SkeletonPlaceholderComponent,
  Webview,
} from '../pages';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={RoutesNames.BLOB_UTIL}>
          <Drawer.Screen name={RoutesNames.HOME} component={Home} />

          <Drawer.Screen name={RoutesNames.BLOB_UTIL} component={BlobUtil} />
          <Drawer.Screen
            name={RoutesNames.DEVICE_INFO}
            component={DeviceInfoComponent}
          />
          <Drawer.Screen name={RoutesNames.FAST_IMAGE} component={Home} />
          <Drawer.Screen
            name={RoutesNames.HAPTIC_FEEDBACK}
            component={HapticFeedback}
          />
          <Drawer.Screen name={RoutesNames.IMAGE_PICKER} component={Home} />
          <Drawer.Screen
            name={RoutesNames.LINEAR_GRADIENT}
            component={LinearGradientComponent}
          />
          <Drawer.Screen name={RoutesNames.MMKV} component={Home} />
          <Drawer.Screen name={RoutesNames.REANIMATED} component={Reanimated} />
          <Drawer.Screen name={RoutesNames.RN_SVG} component={Home} />
          <Drawer.Screen
            name={RoutesNames.SKELETON_PLACEHOLDER}
            component={SkeletonPlaceholderComponent}
          />
          <Drawer.Screen name={RoutesNames.WEBVIEW} component={Webview} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
