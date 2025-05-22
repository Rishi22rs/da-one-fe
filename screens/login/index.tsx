import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import {useLogin, useOtp} from '../../api/auth';
import LoginBG from '../../assets/loginBg.jpeg';
import {ButtonComponent} from '../../components/ButtonComponent';
import {TextComponent} from '../../components/TextComponent';
import {TextInputComponent} from '../../components/TextInputComponent';
import {navigationConstants} from '../../constants/app-navigation';
import {createStyleSheet} from './style';

export const Login = ({route}) => {
  const style = createStyleSheet();

  const [phoneNumber, setPhoneNumber] = useState();
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const [otp, setOtp] = useState('');

  const handleAuth = res => {
    AsyncStorage.setItem('jwt-token', res?.data?.token).then(() =>
      navigation.navigate(navigationConstants.STEPPER_SCREEN),
    );
  };

  const handleSteps = (step: number) => {
    if (step === 1) {
      setCurrentStep(step);
    }
    if (step === 2) {
      useLogin({phone_number: phoneNumber}).then(data => {
        setCurrentStep(step);
      });
    }
    if (step === 3) {
      useOtp({phoneNumber, otp}).then(handleAuth);
    }
  };

  return (
    <ImageBackground source={LoginBG} style={style.background}>
      <TextComponent viewStyle={style.title}>Best App</TextComponent>
      <View style={style.loginContainer}>
        {currentStep === 0 && (
          <View>
            <ButtonComponent
              buttonText={'Login'}
              textStyle={style.buttonText}
              onPress={() => handleSteps(1)}
            />
          </View>
        )}
        {currentStep === 1 && (
          <View>
            <TextComponent viewStyle={style.loginTitle}>
              Enter Phone No.
            </TextComponent>
            <TextComponent viewStyle={style.loginSubTitle}>
              Please enter your active phone no.
            </TextComponent>
            <TextInputComponent
              maxLength={10}
              showIcon={false}
              placeholderTextColor={'#B8B8B8'}
              placeholder="Enter Phone Number"
              onChangeText={number => setPhoneNumber(number)}
              viewStyle={style.input}
            />
            <ButtonComponent
              buttonText={'Request OTP'}
              textStyle={style.buttonText}
              onPress={() => handleSteps(2)}
            />
          </View>
        )}
        {currentStep === 2 && (
          <View>
            <TextComponent viewStyle={style.loginTitle}>
              Enter your OTP
            </TextComponent>
            <TextComponent viewStyle={style.loginSubTitle}>
              Please enter the OTP sent to your phone no.
            </TextComponent>
            <OtpInput
              numberOfDigits={4}
              onTextChange={text => setOtp(text)}
              theme={{
                containerStyle: style.otpContainer,
              }}
            />
            <TextComponent viewStyle={style.loginSubTitle}>
              Didn’t receive the code? <TextComponent>Resend OTP</TextComponent>
            </TextComponent>
            <ButtonComponent
              buttonText={'Request OTP'}
              textStyle={style.buttonText}
              onPress={() => handleSteps(3)}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
};
