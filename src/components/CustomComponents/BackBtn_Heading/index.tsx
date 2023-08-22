import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    handleClick?: () => void
}

export default function BackBtn_Heading({ title, handleClick }: Props) {
  
  const navigation = useNavigation()
  return (
    <View>
      <Pressable style={styles.backArrowDiv} onPress={() => navigation.goBack()}>
        <Text>
          <MaterialIcons
            name={'keyboard-arrow-left'}
            size={32}
            color={'#1E232C'}
          />
        </Text>
      </Pressable>

      <View style={styles.headingDiv}>
        <Text style={styles.heading1}>{title}</Text>
      </View>
    </View>
  );
}