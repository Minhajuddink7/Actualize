import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import commonStyles from '../common/commonStyles';
import DynamicIcon from '../common/DynamicIcon';
import Notes from '../components/common/Notes';
import Todos from '../components/common/Todos';
import Header from '../components/section/Header';
import BottomModal from '../components/common/BottomModal';
import showToast from '../common/showToast';
import {useDispatch} from 'react-redux';
import {
  changeHobbies,
  changeIntrospection,
  changeLifePurpose,
  changeTranscendence,
} from '../actions/SectionsActions';

const {themeColor, alignHorizontal} = commonStyles();
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
    paddingVertical: 30,
    borderRadius: 20,
    // elevation: 5,
  },
});

const Section = ({navigation, widgets, name, color}) => {
  const dispatch = useDispatch();
  const {card, container} = styles;
  const [screenState, setScreenState] = useState('initial');
  const [modalOpen, setModalOpen] = useState(false);

  const OPTIONS = [
    {name: 'Todos', family: 'FontAwesome5', icon: 'th-list'},
    {name: 'Notes', family: 'FontAwesome', icon: 'sticky-note'},
    {name: 'Quotes', family: 'MaterialCommunityIcons', icon: 'comment-quote'},
    {name: 'Timer', family: 'MaterialCommunityIcons', icon: 'clock-time-seven'},
    {name: 'Visualize', family: 'Ionicons', icon: 'eye'},
  ];

  //form states
  const [selectedWidget, setSelectedWidget] = useState();
  const [widgetName, setWidgetName] = useState();

  // methods
  const addWidget = () => {
    if (!selectedWidget) {
      showToast('Choose a type of widget!');
    } else if (!widgetName) {
      showToast('Enter the name of the widget!');
    } else {
      const option = OPTIONS.find(s => s.name === selectedWidget);
      const newWidgets = [
        ...widgets,
        {
          name: widgetName,
          family: option.family,
          icon: option.icon,
          type: selectedWidget,
        },
      ];
      switch (name) {
        case 'Introspection':
          dispatch(changeIntrospection(newWidgets));
          break;
        case 'Transcendence':
          dispatch(changeTranscendence(newWidgets));
          break;
        case 'Life Purpose':
          dispatch(changeLifePurpose(newWidgets));
          break;
        case 'Hobbies':
          dispatch(changeHobbies(newWidgets));
          break;
        default:
          break;
      }
      setModalOpen(false);
      setSelectedWidget(null);
      setWidgetName(null);
    }
  };

  //effects

  useEffect(() => {
    console.log('ss', screenState);
  }, [screenState]);

  return (
    <View style={container}>
      {screenState === 'initial' ? (
        <Header text={name} color={color} setModalOpen={setModalOpen} />
      ) : (
        <Header text={screenState} color={color} setModalOpen={setModalOpen} />
      )}
      <View style={{height: '70%'}}>
        <ScrollView>
          <View
            style={{
              marginHorizontal: '6%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginTop: 50,
              flexWrap: 'wrap',
            }}>
            {screenState === 'initial' ? (
              widgets?.map((section, i) => {
                return (
                  <TouchableOpacity
                    style={card}
                    key={i}
                    onPress={() => setScreenState(section.type)}>
                    <View style={{marginTop: 20}}>
                      <DynamicIcon
                        family={section.family}
                        name={section.icon}
                        size={40}
                        color={color}
                      />
                    </View>
                    <TouchableOpacity
                      style={{position: 'absolute', top: 10, left: 10}}>
                      <DynamicIcon
                        family="MaterialIcons"
                        name="more-vert"
                        size={30}
                        color={color}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{position: 'absolute', top: 10, right: 10}}>
                      <DynamicIcon
                        family="MaterialIcons"
                        name="delete"
                        size={30}
                        color={color}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'DancingScript-Bold',
                        fontSize: 18,
                        marginHorizontal: 5,
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
        </ScrollView>
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
              marginBottom: 30,
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
      {/* {modalOpen ? ( */}

      <BottomModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <View style={{marginVertical: 15, marginHorizontal: '6%'}}>
          <Text
            style={{
              marginVertical: 10,
              fontFamily: 'DancingScript-SemiBold',
              fontSize: 22,
            }}>
            Choose Widget Type :
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {OPTIONS.map((section, i) => {
              const widgetChoosen = section.name === selectedWidget;
              return (
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderColor: color,
                    borderRadius: 20,
                    borderWidth: 0.5,
                    marginRight: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: widgetChoosen ? color : '#fff',
                  }}
                  key={i}
                  onPress={() => setSelectedWidget(section.name)}>
                  <DynamicIcon
                    family={section.family}
                    name={section.icon}
                    size={10}
                    color={widgetChoosen ? '#fff' : color}
                  />
                  <Text
                    style={{
                      fontFamily: 'DancingScript-SemiBold',
                      marginLeft: 10,
                      color: widgetChoosen ? '#fff' : color,
                    }}>
                    {section.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
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
              }}
              placeholder="Name of the Widget"
              placeholderTextColor="#666"
              value={widgetName}
              onChangeText={text => setWidgetName(text)}
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
            onPress={addWidget}>
            <Text style={{color: '#fff', fontFamily: 'DancingScript-SemiBold'}}>
              Add Widget
            </Text>
          </TouchableOpacity>
        </View>
      </BottomModal>

      {/* ) : null} */}
    </View>
  );
};

export default Section;
