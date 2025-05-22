import {createStyleSheet} from './style';
import {FlatList, Image, Pressable, ScrollView, Text, View} from 'react-native';
import {Header} from '../../components/Header';
import {CardComponent} from '../../components/CardComponent';
import {TextComponent} from '../../components/TextComponent';
import {ButtonComponent} from '../../components/ButtonComponent';
import {TextInputComponent} from '../../components/TextInputComponent';
import {ModalComponent} from '../../components/ModalComponent';
import {useRef} from 'react';
import {Chip} from '../../components/ChipComponent';
import {interestsCategories} from '../../constants/profile-info-options';
import AntDesignIcon from 'react-native-vector-icons/dist/AntDesign';
import {defaultTheme} from '../../config/theme';

export const ProfileEdit = ({route}) => {
  const styles = createStyleSheet();
  const interestedModalRef = useRef();

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.background}>
        <CardComponent viewStyle={{alignItems: 'center', width: '100%'}}>
          <TextInputComponent
            labelStyle={styles.labelStyle}
            placeholder="About me"
            label="Bio"
            numOfLines={5}
          />
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
            {[
              'Casual Dating',
              'Serious Relationship',
              'Long-term Relationship',
              'Marriage',
              'Open Relationship',
            ].map(item => (
              <Chip label={item} />
            ))}
          </View>
        </CardComponent>
        <CardComponent>
          <TextInputComponent
            labelStyle={styles.labelStyle}
            label="Height (in Feet)"
            numOfLines={5}
            keyboardType="number-pad"
          />
        </CardComponent>
        <CardComponent>
          <TextInputComponent
            labelStyle={styles.labelStyle}
            label="Height (in Feet)"
            numOfLines={5}
            keyboardType="number-pad"
          />
        </CardComponent>
      </ScrollView>
      <ModalComponent title="Interests" ref={interestedModalRef}>
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
      </ModalComponent>
    </>
  );
};
