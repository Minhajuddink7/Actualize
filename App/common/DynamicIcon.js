import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const DynamicIcon = ({name, family, color, size}) => {
  switch (family) {
    case 'FontAwesome':
      return <FontAwesome name={name} size={size} color={color} />;
    case 'FontAwesome5':
      return <FontAwesome5 name={name} size={size} color={color} />;
    case 'Ionicons':
      return <Ionicons name={name} size={size} color={color} />;
    case 'Entypo':
      return <Entypo name={name} size={size} color={color} />;
    case 'Feather':
      return <Feather name={name} size={size} color={color} />;
    case 'AntDesign':
      return <AntDesign name={name} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} size={size} color={color} />;

    case 'Foundation':
      return <Foundation name={name} size={size} color={color} />;

    case 'Fontisto':
      return <Fontisto name={name} size={size} color={color} />;

    case 'EvilIcons':
      return <EvilIcons name={name} size={size} color={color} />;

    case 'Octicons':
      return <Octicons name={name} size={size} color={color} />;

    case 'SimpleLineIcons':
      return <SimpleLineIcons name={name} size={size} color={color} />;

    case 'Zocial':
      return <Zocial name={name} size={size} color={color} />;

    default:
      return <FontAwesome name="car" size={size} color={color} />;
  }
};

export default DynamicIcon;
