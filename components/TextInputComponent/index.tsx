import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {createStyleSheet} from './style';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import {TextComponent} from '../TextComponent';

interface TextInputComponentProps extends TextInputProps {
  viewStyle?: StyleProp<ViewStyle>;
  inputStyle?: TextStyle;
  iconName?: string;
  showIcon?: boolean;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  numOfLines?: number;
}

export const TextInputComponent = ({
  viewStyle,
  inputStyle,
  iconName,
  showIcon = false,
  label,
  labelStyle,
  numOfLines = 1,
  ...props
}: TextInputComponentProps) => {
  const style = createStyleSheet();
  return (
    // <TextInput {...props} style={[style.container,viewStyle]}/>
    <>
      {label && <TextComponent viewStyle={labelStyle}>{label}</TextComponent>}
      <View style={[style.container, viewStyle]}>
        {showIcon && (
          <SearchIcon name={'search'} size={30} style={style.iconStyle} />
        )}

        <TextInput
          {...props}
          style={[style.textInput, inputStyle]}
          multiline={true}
          numberOfLines={numOfLines}
        />
      </View>
    </>
  );
};
