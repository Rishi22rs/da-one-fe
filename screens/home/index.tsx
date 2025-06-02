import {Image, ScrollView, Text, View} from 'react-native';
import {CardComponent} from '../../components/CardComponent';
import {Header} from '../../components/Header';
import {createStyleSheet} from './style';
import {useEffect, useState} from 'react';
import {requestLocationPermission} from '../../utils/requestLocationPermission';
import Geolocation from 'react-native-geolocation-service';
import {ButtonComponent} from '../../components/ButtonComponent';
import {useAddLikeDislike, useGetNearbyUsers} from '../../api/match';
import {BigText} from './components/BigText';
import {SmallText} from './components/SmallText';
import {LineItems} from './components/LineItems';
import {useNavigation} from '@react-navigation/native';
import {navigationConstants} from '../../constants/app-navigation';

export const Home = ({route}) => {
  const styles = createStyleSheet();
  const [locationGranted, setLocationGranted] = useState(false);
  const [nearbyUsers, setNearbyUsers] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    useGetNearbyUsers({
      latitude: 37.7749,
      longitude: -122.4194,
      radius: 10,
    }).then(res => {
      console.log('nearbu', res?.data);
      setNearbyUsers(res?.data);
    });
  }, []);

  const askLocationPermission = async () => {
    const granted = await requestLocationPermission();
    if (granted) {
      console.log('Permission granted');
      setLocationGranted(true);
    } else {
      console.log('Permission denied');
      setLocationGranted(false);
    }
  };

  useEffect(() => {
    askLocationPermission();
  }, []);

  Geolocation.getCurrentPosition(
    position => {
      console.log('Location:', position);
    },
    error => {
      console.error('Location error:', error);
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    },
  );

  const handleLikeDislike = (isLike: boolean, payload?: object) => {
    isLike &&
      useAddLikeDislike(payload).then(res => {
        if (res?.data?.match) {
          navigation.replace(navigationConstants.MATCH_ROUTE, {
            screen: navigationConstants.ITS_A_MATCH,
            params: {},
          });
        }
      });
    setCurrentUserIndex(prev => prev + 1);
  };

  const getCurrentSection = (user: unknown) => {
    switch (user?.type) {
      case 'BIG_TEXT':
        return <BigText title={user?.title} content={user?.content} />;
      case 'SMALL_TEXT':
        return <SmallText title={user?.title} content={user?.content} />;
      case 'SMALL_TEXT_LIST':
        return <LineItems title={user?.title} content={user?.content} />;
    }
  };

  return (
    <>
      <Header />
      <View style={{flex: 1}}>
        {locationGranted ? (
          <View>
            <ScrollView contentContainerStyle={styles.background}>
              <>
                <CardComponent viewStyle={{padding: 0}}>
                  <Image
                    source={{
                      uri:
                        'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/s/d/v/medium-anime-girls-fantasy-anime-girls-hd-matte-finish-poster-original-imagh8k9taqepyzs.jpeg?q=90&crop=false' ||
                        undefined,
                    }}
                    style={[styles.image]}
                  />
                </CardComponent>
                <View style={{overflow: 'visible', gap: 8, marginTop: 8}}>
                  {nearbyUsers?.[currentUserIndex]?.segregatedList?.map(user =>
                    getCurrentSection(user),
                  )}
                  {/* <CardComponent heading="Basics">
                    <Text style={styles.tableTitle}>Communication</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        paddingHorizontal: 8,
                      }}>
                      <Image
                        source={{
                          uri:
                            'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/s/d/v/medium-anime-girls-fantasy-anime-girls-hd-matte-finish-poster-original-imagh8k9taqepyzs.jpeg?q=90&crop=false' ||
                            undefined,
                        }}
                        style={{height: 14, width: 14}}
                      />
                      <Text style={styles.description}>Better in person</Text>
                    </View>
                    <View style={styles.seperator}></View>
                    <Text style={styles.tableTitle}>Communication</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        paddingHorizontal: 8,
                      }}>
                      <Image
                        source={{
                          uri:
                            'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/s/d/v/medium-anime-girls-fantasy-anime-girls-hd-matte-finish-poster-original-imagh8k9taqepyzs.jpeg?q=90&crop=false' ||
                            undefined,
                        }}
                        style={{height: 14, width: 14}}
                      />
                      <Text style={styles.description}>Better in person</Text>
                    </View>
                    <View style={styles.seperator}></View>
                    <Text style={styles.tableTitle}>Communication</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        paddingHorizontal: 8,
                      }}>
                      <Image
                        source={{
                          uri:
                            'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/s/d/v/medium-anime-girls-fantasy-anime-girls-hd-matte-finish-poster-original-imagh8k9taqepyzs.jpeg?q=90&crop=false' ||
                            undefined,
                        }}
                        style={{height: 14, width: 14}}
                      />
                      <Text style={styles.description}>Better in person</Text>
                    </View>
                  </CardComponent> */}
                </View>
              </>
            </ScrollView>
            <View style={styles.likeUnlikeCtaContainer}>
              <ButtonComponent
                onPress={() =>
                  handleLikeDislike(true, {
                    other_user_id: nearbyUsers?.[currentUserIndex]?.userId,
                  })
                }
                buttonText={'like'}
              />
              <ButtonComponent
                onPress={() => handleLikeDislike(false)}
                buttonText={'No Like'}
              />
            </View>
          </View>
        ) : (
          <View style={styles.background}>
            <Text style={styles.nameText}>
              We need your location to serve users near you.
            </Text>
            <ButtonComponent
              buttonText="Allow permission"
              onPress={askLocationPermission}
            />
          </View>
        )}
      </View>
    </>
  );
};
