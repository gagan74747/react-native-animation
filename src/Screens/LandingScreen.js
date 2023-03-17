import {StyleSheet, Animated, View} from 'react-native';
import React from 'react';

const LandingScreen = () => {
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      delay: 400,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={[styles.container]}>
      <Animated.Text
        style={[
          styles.logo,
          {
            opacity,
            transform: [
              {
                rotate: opacity.interpolate({
                  inputRange: [0, 0.2, 0.4, 0.8, 1],
                  outputRange: [
                    '0deg',
                    '540deg',
                    '-360deg',
                    '-900deg',
                    '720deg',
                  ],
                }),
              },
              {
                scale: opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 7],
                }),
              },
            ],
          },
        ]}>
        Task
      </Animated.Text>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'red',
    fontSize: 10,
  },
});
