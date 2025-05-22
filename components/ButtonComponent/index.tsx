import {Pressable, PressableProps, Text, TextStyle} from 'react-native';
import {defaultTheme} from '../../config/theme';
import {hexToRgbA} from '../../utils/hexToRgba';
import {createStyleSheet} from './style';

interface ButtonComponentProps {
  viewStyle?: PressableProps;
  textStyle?: TextStyle;
  children?: React.ReactNode;
  buttonText: String;
  disabled: boolean;
}

export const ButtonComponent = (props: ButtonComponentProps) => {
  const {
    children,
    viewStyle,
    textStyle,
    buttonText = '',
    disabled = false,
  } = props;
  const style = createStyleSheet();
  return (
    <Pressable
      {...props}
      style={[
        style.navigateButton,
        disabled
          ? {
              backgroundColor: hexToRgbA(defaultTheme.brown, 20),
            }
          : {},
        viewStyle,
      ]}>
      <Text style={[style.text, textStyle]}>{buttonText}</Text>
    </Pressable>
  );
};
