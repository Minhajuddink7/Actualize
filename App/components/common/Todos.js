import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

const Todos = () => {
  const [todos, setTodos] = useState([
    {title: 'Complete your current book', completed: false},
    {title: 'Learn flutter and dart', completed: true},
    {title: 'Learn firebase and firestore from fireship', completed: false},
    {title: 'Learn firebase and firestore from fireship', completed: false},
    {title: 'Learn firebase and firestore from fireship', completed: false},
    {title: 'Learn firebase and firestore from fireship', completed: false},
  ]);
  console.log('Random id: ', uuid.v4());

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          {todos.map((todo, i) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderTopWidth: 0.5,
                }}
                key={i}>
                {/* <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 50,
                borderWidth: 0.5,
                marginRight: 10,
              }}></View> */}
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
    </View>
  );
};

export default Todos;
