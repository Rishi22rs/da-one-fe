import {Text} from 'react-native';
import {CardComponent} from '../../../components/CardComponent';
import {createStyleSheet} from '../style';

export const LineItems = ({title = '', content = []}) => {
  const styles = createStyleSheet();
  return (
    <CardComponent heading={title}>
      {content?.map(item => (
        <Text style={styles.distanceText}>{item?.value}</Text>
      ))}
    </CardComponent>
  );
};
