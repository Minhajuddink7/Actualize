import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import commonStyles from '../../common/commonStyles';
import DynamicIcon from '../../common/DynamicIcon';
import Notes from '../../components/common/Notes';
import Todos from '../../components/common/Todos';
import Header from '../../components/section/Header';
const {
  themeColor,
  alignHorizontal,
  introspectionColor: iColor,
} = commonStyles();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
  },
  card: {
    backgroundColor: '#fff',
    width: '45%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 20,
    // elevation: 5,
  },
});

const Introspection = ({navigation}) => {
  const {card, container} = styles;
  const [screenState, setScreenState] = useState('initial');
  const SECTIONS = [
    {name: 'Todos', family: 'FontAwesome5', icon: 'th-list'},
    {name: 'Notes', family: 'FontAwesome', icon: 'sticky-note'},
  ];
  return (
    <View style={container}>
      <Header text="Introspection" color={iColor} />
      <View
        style={{
          marginHorizontal: '6%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 50,
          flexWrap: 'wrap',
        }}>
        {screenState === 'initial' ? (
          SECTIONS.map((section, i) => {
            return (
              <TouchableOpacity
                style={card}
                key={i}
                onPress={() => setScreenState(section.name)}>
                <DynamicIcon
                  family={section.family}
                  name={section.icon}
                  size={25}
                  color={iColor}
                />
                <Text
                  style={{
                    fontFamily: 'DancingScript-Bold',
                    fontSize: 18,
                  }}>
                  {section.name}
                </Text>
              </TouchableOpacity>
            );
          })
        ) : screenState === 'Todos' ? (
          <Todos />
        ) : (
          <Notes />
        )}
      </View>
      <View style={{marginLeft: '6%', flex: 1}}>
        <TouchableOpacity
          style={[
            alignHorizontal,
            {
              width: 170,
              height: 50,
              backgroundColor: '#758283',
              marginTop: 'auto',
              marginBottom: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            },
          ]}
          onPress={() => {
            if (screenState === 'initial') navigation.navigate('Home');
            else setScreenState('initial');
          }}>
          <DynamicIcon
            family="FontAwesome5"
            name="chevron-left"
            size={20}
            color="#fff"
          />
          <Text
            style={{
              color: '#fff',
              fontFamily: 'DancingScript-Bold',
              fontSize: 16,
              marginLeft: 10,
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Introspection;
