import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeWidgetFormState} from '../actions/CommonActions';
import BottomNav from '../common/BottomNav';
import Layout from './Layout';
import Widget from './Widget';

const WidgetScreen = ({navigation, route}) => {
  const {widget, section, color, id} = route.params;
  const widgetFormOpen = useSelector(state => state.common.widgetFormOpen);
  const dispatch = useDispatch();
  return (
    <Layout>
      <Widget
        widget={widget}
        section={section}
        navigation={navigation}
        id={id}
      />
      <BottomNav
        navigation={navigation}
        color={color}
        buttonText={`Add`}
        callback={() => dispatch(changeWidgetFormState(true))}
      />
    </Layout>
  );
};

export default WidgetScreen;
