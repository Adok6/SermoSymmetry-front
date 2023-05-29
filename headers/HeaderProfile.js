import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const HeaderTherapist = ({ onBackPress }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 50, marginRight: 20 }}>
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={handleBackPress}>
        <Icon name="chevron-left" size={20} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', flex: 1 }}>Профиль</Text>
    </View>
  );
};

export default HeaderTherapist;
