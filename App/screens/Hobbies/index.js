import React from 'react';
import {useSelector} from 'react-redux';
import commonStyles from '../../common/commonStyles';
import Section from '../Section';

const Hobbies = ({navigation}) => {
  const widgets = useSelector(state => state.sections.hobbies);
  const {hobbiesColor} = commonStyles();
  return (
    <Section
      navigation={navigation}
      widgets={widgets}
      name="Hobbies"
      color={hobbiesColor}
    />
  );
};

export default Hobbies;
