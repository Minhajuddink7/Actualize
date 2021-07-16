import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
  ]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          marginVertical: 15,
          fontFamily: 'DancingScript-Bold',
        }}>
        Todos
      </Text>
      <View style={{maxHeight: '70%'}}>
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
