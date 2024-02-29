import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

//Styles
import styles from './styles';

//Icons
import {ICONS} from '../../assets/icons';

//Navigation
import {useNavigation} from '@react-navigation/core';

//Interfaces
interface ItemMenuProps {
  title: string,
  icon: string,
  screen: string
}

const MainFooter = (): React.JSX.Element => {
  // Navigator
  const navigator = useNavigation();

  const ItemMenu: FC<ItemMenuProps> = ({title, icon, screen}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigator.navigate(screen)
        }}
        style={styles.mainContItemMenu}>
        <Image source={icon} style={styles.itemIcon} />
        <Text style={styles.itemTxtTitle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ItemMenu title="Home" icon={ICONS.home} screen="Home" />
      <ItemMenu title="Send" icon={ICONS.send} screen="Send" />
      <ItemMenu title="Buy" icon={ICONS.buy} screen="Buy" />
    </View>
  );
};

export default MainFooter;
