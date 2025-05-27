import {Image, ScrollView, Text, View} from 'react-native';
import {CardComponent} from '../../components/CardComponent';
import {Header} from '../../components/Header';
import {createStyleSheet} from './style';
import {useEffect} from 'react';
import {requestLocationPermission} from '../../utils/requestLocationPermission';
import Geolocation from 'react-native-geolocation-service';

export const Home = ({route}) => {
  const styles = createStyleSheet();

  useEffect(() => {
    (async () => {
      const granted = await requestLocationPermission();
      if (granted) {
        console.log('Permission granted');
        // fetch location or do something here
      } else {
        console.log('Permission denied');
      }
    })();
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

  return (
    <>
      <Header />
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.background}>
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
            <CardComponent heading="Name & Age">
              <Text style={styles.nameText}>Hori San, 25</Text>
            </CardComponent>
            <CardComponent heading="Essentials">
              <Text style={styles.distanceText}>19 km away</Text>
            </CardComponent>
            <CardComponent heading="Basics">
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
            </CardComponent>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
