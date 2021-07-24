import React from 'react';
import Notes from '../components/common/Notes';
import Todos from '../components/common/Todos';
const Widget = ({widget, section, id, navigation}) => {
  switch (widget.type) {
    case 'Todos':
      return (
        <Todos
          name={widget.name}
          section={section}
          id={id}
          navigation={navigation}
        />
      );
    case 'Notes':
      return (
        <Notes
          name={widget.name}
          section={section}
          id={id}
          navigation={navigation}
        />
      );
    default:
      return (
        <Notes
          name={widget.name}
          section={section}
          id={id}
          navigation={navigation}
        />
      );
  }
};

export default Widget;
