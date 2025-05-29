import {Text} from 'react-native';
import {CardComponent} from '../../../components/CardComponent';
import {createStyleSheet} from '../style';

export const BigText = ({title = '', content = ''}) => {
  const styles = createStyleSheet();
  return (
    <CardComponent heading={title}>
      <Text style={styles.nameText}>{content}</Text>
    </CardComponent>
  );
};
