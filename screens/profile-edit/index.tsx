import {createStyleSheet} from './style';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Header} from '../../components/Header';
import {CardComponent} from '../../components/CardComponent';
import {TextComponent} from '../../components/TextComponent';
import {ButtonComponent} from '../../components/ButtonComponent';
import {TextInputComponent} from '../../components/TextInputComponent';
import {ModalComponent} from '../../components/ModalComponent';
import {useEffect, useRef, useState} from 'react';
import {Chip} from '../../components/ChipComponent';
import {interestsCategories} from '../../constants/profile-info-options';
import AntDesignIcon from 'react-native-vector-icons/dist/AntDesign';
import {defaultTheme} from '../../config/theme';
import {useGetUserInfo} from '../../api/profile';
import DateTimePicker from '@react-native-community/datetimepicker';

export const ProfileEdit = ({route}) => {
  const styles = createStyleSheet();
  const interestedModalRef = useRef();
  const [formData, setFormData] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    useGetUserInfo().then(res => {
      console.log('resss', res);
      setFormData(res?.data?.data);
    });
  }, []);

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.background}>
        <CardComponent viewStyle={{alignItems: 'center', width: '100%'}}>
          <TextInputComponent
            labelStyle={styles.labelStyle}
            placeholder="Your Phone Number"
            label="Your Name"
            numOfLines={1}
            value={formData?.name}
          />
        </CardComponent>
        <CardComponent viewStyle={{alignItems: 'center', width: '100%'}}>
          <TextInputComponent
            labelStyle={styles.labelStyle}
            placeholder="About me"
            label="Bio"
            numOfLines={5}
            value={formData?.bio}
          />
        </CardComponent>
        <CardComponent viewStyle={{alignItems: 'center', width: '100%'}}>
          <TextInputComponent
            labelStyle={styles.labelStyle}
            placeholder="Your Phone Number"
            label="Phone Number"
            numOfLines={1}
            value={formData?.phone_number}
            keyboardType="phone-pad"
          />
        </CardComponent>
        <CardComponent>
          <TextComponent viewStyle={styles.labelStyle}>Birthday</TextComponent>
          <Chip
            label={formData?.birthday}
            onSelect={() => setShowDatePicker(true)}
          />
          {showDatePicker && (
            <DateTimePicker
              mode="date"
              value={formData.birthday}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, date) => {
                if (date) {
                  setFormData(prev => ({...prev, birthday: date}));
                }
                setShowDatePicker(false);
              }}
              maximumDate={new Date()}
            />
          )}
        </CardComponent>
        <CardComponent>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextComponent viewStyle={styles.labelStyle}>
              Interests
            </TextComponent>
            <Pressable
              style={{bottom: 4}}
              onPress={() => interestedModalRef.current.onOpenModal()}>
              <AntDesignIcon name="edit" size={20} color={defaultTheme.brown} />
            </Pressable>
          </View>
          <View style={{flexWrap: 'wrap', flexDirection: 'row', gap: 8}}>
            {formData?.passions?.split(',').map(item => (
              <Chip label={item} />
            ))}
          </View>
        </CardComponent>
        <CardComponent>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextComponent viewStyle={styles.labelStyle}>Gender</TextComponent>
            <Pressable
              style={{bottom: 4}}
              onPress={() => interestedModalRef.current.onOpenModal()}>
              <AntDesignIcon name="edit" size={20} color={defaultTheme.brown} />
            </Pressable>
          </View>
          <View style={{flexWrap: 'wrap', flexDirection: 'row', gap: 8}}>
            <Chip label={formData?.gender} />
          </View>
        </CardComponent>
        <CardComponent>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextComponent viewStyle={styles.labelStyle}>
              Orientation
            </TextComponent>
            <Pressable
              style={{bottom: 4}}
              onPress={() => interestedModalRef.current.onOpenModal()}>
              <AntDesignIcon name="edit" size={20} color={defaultTheme.brown} />
            </Pressable>
          </View>
          <View style={{flexWrap: 'wrap', flexDirection: 'row', gap: 8}}>
            <Chip label={formData?.orientation} />
          </View>
        </CardComponent>
      </ScrollView>
      {/* <ModalComponent title="Interests" ref={interestedModalRef}>
        <FlatList
          contentContainerStyle={{paddingBottom: 16}}
          data={interestsCategories}
          renderItem={({item}) => (
            <View style={{marginTop: 16}}>
              <Text>Relationship Goals</Text>
              <View style={styles.chipContainer}>
                {item?.list?.map(l => (
                  <Chip label={l} />
                ))}
              </View>
            </View>
          )}
        />
        <ButtonComponent buttonText={'Save'} />
      </ModalComponent> */}
    </>
  );
};
