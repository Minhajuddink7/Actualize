import React, {useReducer, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import uuid from 'react-native-uuid';
import {useDispatch, useSelector} from 'react-redux';
import {changeWidgetFormState} from '../../actions/CommonActions';
import {addTodos, toggleTodo} from '../../actions/TodoActions';
import BottomNav from '../../common/BottomNav';
import commonStyles from '../../common/commonStyles';
import showToast from '../../common/showToast';
import Header from '../section/Header';
import BottomModal from './BottomModal';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: '6%',
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: '80%',
  },
});

const Todos = ({section, id, navigation}) => {
  const {
    introspectionColor,
    transcendenceColor,
    lifePurposeColor,
    hobbiesColor,
  } = commonStyles();
  let color;
  switch (section) {
    case 'Introspection':
      color = introspectionColor;
      break;
    case 'Transcendence':
      color = transcendenceColor;
      break;
    case 'Life Purpose':
      color = lifePurposeColor;
      break;
    case 'Hobbies':
      color = hobbiesColor;
      break;
    default:
      break;
  }

  // console.log('sss: ', section);
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState();
  const dispatchRedux = useDispatch();
  const widgetFormOpen = useSelector(state => state.common.widgetFormOpen);
  const closeModal = () => {
    dispatchRedux(changeWidgetFormState(false));
  };

  const addTodo = () => {
    dispatchRedux(
      addTodos({
        id: uuid.v4(),
        title: todo,
        completed: false,
      }),
    );
    closeModal();
  };
  const toggleState = completed => {
    // dispatchRedux(toggleTodo({}));
    console.log(completed);
  };
  return (
    <View>
      <Header text="Todos" />
      <View style={styles.container}>
        <ScrollView>
          {todos?.map((todo, i) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderTopWidth: 0.5,
                }}
                key={i}
                onPress={() => toggleState(todo.completed)}>
                <Text
                  key={i}
                  style={{
                    fontSize: 18,
                    fontFamily: 'DancingScript-SemiBold',
                    color: todo.completed ? '#ccc' : '#000',
                    textDecorationLine: todo.completed
                      ? 'line-through'
                      : 'none',
                  }}>
                  {todo.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <BottomModal modalOpen={widgetFormOpen} setModalOpen={closeModal}>
        <View style={{marginVertical: 15, marginHorizontal: '6%'}}>
          <Text
            style={{
              marginVertical: 10,
              // fontFamily: 'Roboto-Regular',
              fontFamily: 'DancingScript-SemiBold',
              fontSize: 22,
            }}>
            Add Todo Below:
          </Text>
          <View
            style={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: color,
              marginVertical: 15,
              paddingLeft: 10,
            }}>
            <TextInput
              style={{
                fontFamily: 'DancingScript-Regular',
                width: '100%',
                color: '#000',
                fontSize: 18,
              }}
              autoFocus={true}
              placeholder="Enter your todo here......."
              placeholderTextColor="#666"
              value={todo}
              onChangeText={text => setTodo(text)}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 51,
              backgroundColor: color,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}
            onPress={() => {
              if (!todo) {
                showToast('Please enter the todo.....');
              } else {
                addTodo();
              }
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'DancingScript-SemiBold',
                fontSize: 18,
              }}>
              Add Todo
            </Text>
          </TouchableOpacity>
        </View>
      </BottomModal>
    </View>
  );
};

export default Todos;
