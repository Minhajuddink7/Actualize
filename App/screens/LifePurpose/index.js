import React from 'react';
import {useSelector} from 'react-redux';
import commonStyles from '../../common/commonStyles';
import Section from '../Section';

const LifePurpose = ({navigation}) => {
  const widgets = useSelector(state => state.sections.lifePurpose);
  const {lifePurposeColor} = commonStyles();
  return (
    <Section
      navigation={navigation}
      widgets={widgets}
      name="Life Purpose"
      color={lifePurposeColor}
    />
  );
};

export default LifePurpose;
