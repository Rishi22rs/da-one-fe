import {useNavigation} from '@react-navigation/native';
import {Image, ScrollView, Text} from 'react-native';
import {ButtonComponent} from '../../components/ButtonComponent';
import {CardComponent} from '../../components/CardComponent';
import {Header} from '../../components/Header';
import {createStyleSheet} from './style';

export const ItsAMatch = ({route}) => {
  const styles = createStyleSheet();
  const navigation = useNavigation();

  return (
    <>
      <Header prefixTitle="It's a match" />
      <ScrollView contentContainerStyle={styles.background}>
        <CardComponent>
          <Text>It's a match</Text>
          <ButtonComponent buttonText="Un-match" viewStyle={styles.cta} />
        </CardComponent>
      </ScrollView>
    </>
  );
};
