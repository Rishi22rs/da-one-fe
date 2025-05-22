import {useNavigation} from '@react-navigation/native';
import {Image, ScrollView} from 'react-native';
import {ButtonComponent} from '../../components/ButtonComponent';
import {CardComponent} from '../../components/CardComponent';
import {Header} from '../../components/Header';
import {navigationConstants} from '../../constants/app-navigation';
import {createStyleSheet} from './style';

export const Profile = ({route}) => {
  const styles = createStyleSheet();
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate(navigationConstants.PROFILE_ROUTE, {
      screen: navigationConstants.PROFILE_EDIT,
      params: {},
    });
  };

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.background}>
        <CardComponent>
          <Image
            source={{
              uri:
                'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/s/d/v/medium-anime-girls-fantasy-anime-girls-hd-matte-finish-poster-original-imagh8k9taqepyzs.jpeg?q=90&crop=false' ||
                undefined,
            }}
            style={styles.profileImage}
          />
          <ButtonComponent
            buttonText="Edit"
            viewStyle={styles.cta}
            onPress={handleEditProfile}
          />
        </CardComponent>
      </ScrollView>
    </>
  );
};
