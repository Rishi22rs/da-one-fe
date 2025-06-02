import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {Header} from '../../components/Header';
import {createStyleSheet} from './style';
import {useNavigation} from '@react-navigation/native';
import {navigationConstants} from '../../constants/app-navigation';

export const ItsAMatch = () => {
  const styles = createStyleSheet();
  const navigation = useNavigation();

  const handleChatNavigation = () => {
    navigation.navigate(navigationConstants.MATCH_ROUTE, {
      screen: navigationConstants.CHAT,
      params: {},
    });
  };

  const handleProfileNavigation = () => {
    navigation.navigate(navigationConstants.MATCH_ROUTE, {
      screen: navigationConstants.VIEW_ONLY_PROFILE,
    });
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.matchText}>It's a Match!</Text>

        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://via.placeholder.com/100'}}
            style={styles.profileImage}
          />
          <Image
            source={{uri: 'https://via.placeholder.com/100'}}
            style={styles.profileImage}
          />
        </View>

        {/* <Text style={styles.termsText}>
          By tapping, you agree to our{' '}
          <Text style={styles.link}>Terms and Privacy Policy</Text>
        </Text> */}

        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.fbButton]}
            onPress={handleProfileNavigation}>
            <Text style={styles.fbText}>View Profile</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.googleButton]}
            onPress={handleChatNavigation}>
            <Text style={styles.googleText}>Chat</Text>
          </Pressable>
        </View>

        {/* <Text style={styles.footerText}>
          We don't post anything to Facebook.
        </Text> */}
      </View>
    </>
  );
};
