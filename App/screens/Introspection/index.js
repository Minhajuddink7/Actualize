import React from 'react';
import {useSelector} from 'react-redux';
import commonStyles from '../../common/commonStyles';
import Section from '../Section';

const Introspection = ({navigation}) => {
  const iWidgets = useSelector(state => state.sections.introspection);
  const {introspectionColor} = commonStyles();
  return (
    <Section
      navigation={navigation}
      widgets={iWidgets}
      name="Introspection"
      color={introspectionColor}
    />
  );
};

export default Introspection;
