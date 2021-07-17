import React from 'react';
import {useSelector} from 'react-redux';
import commonStyles from '../../common/commonStyles';
import Section from '../Section';

const Transcendence = ({navigation}) => {
  const {transcendenceColor} = commonStyles();
  const tWidgets = useSelector(state => state.sections.transcendence);
  return (
    <Section
      navigation={navigation}
      widgets={tWidgets}
      name="Transcendence"
      color={transcendenceColor}
    />
  );
};

export default Transcendence;
