import React from 'react';
import Notes from '../components/common/Notes';
import Todos from '../components/common/Todos';
const Widget = ({type, section, id, navigation}) => {
  switch (type) {
    case 'Todos':
      return <Todos section={section} id={id} navigation={navigation} />;
    case 'Notes':
      return <Notes section={section} id={id} navigation={navigation} />;
    default:
      return <Notes section={section} id={id} navigation={navigation} />;
  }
};

export default Widget;
