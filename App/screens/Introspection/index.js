import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import commonStyles from '../../common/commonStyles';
import DynamicIcon from '../../common/DynamicIcon';
import Notes from '../../components/common/Notes';
import Todos from '../../components/common/Todos';
import Header from '../../components/section/Header';
import Modal from 'react-native-modal';
import BottomModal from '../../components/common/BottomModal';
import showToast from '../../common/showToast';
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
    paddingVertical: 30,
    borderRadius: 20,
    // elevation: 5,
  },
});

const Introspection = ({navigation}) => {
  const {card, container} = styles;
  const [screenState, setScreenState] = useState('initial');
  const [modalOpen, setModalOpen] = useState(false);

  const SECTIONS = [
    {name: 'Todos', family: 'FontAwesome5', icon: 'th-list'},
    {name: 'Notes', family: 'FontAwesome', icon: 'sticky-note'},
    {name: 'Quotes', family: 'MaterialCommunityIcons', icon: 'comment-quote'},
    {name: 'Timer', family: 'MaterialCommunityIcons', icon: 'clock-time-seven'},
    {name: 'Visualize', family: 'Ionicons', icon: 'eye'},
  ];
  const [widgets, setWidgets] = useState([]);
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
      const section = SECTIONS.find(s => s.name === selectedWidget);
      setWidgets(old => {
        return [
          ...old,
          {name: widgetName, family: section.family, icon: section.icon},
        ];
      });
      setModalOpen(false);
      setSelectedWidget(null);
      setWidgetName(null);
    }
  };

  return (
    <View style={container}>
      <Header text="Introspection" color={iColor} setModalOpen={setModalOpen} />
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
              widgets.map((section, i) => {
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
            {SECTIONS.map((section, i) => {
              const widgetChoosen = section.name === selectedWidget;
              return (
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderColor: iColor,
                    borderRadius: 20,
                    borderWidth: 0.5,
                    marginRight: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: widgetChoosen ? iColor : '#fff',
                  }}
                  key={i}
                  onPress={() => setSelectedWidget(section.name)}>
                  <DynamicIcon
                    family={section.family}
                    name={section.icon}
                    size={10}
                    color={widgetChoosen ? '#fff' : iColor}
                  />
                  <Text
                    style={{
                      fontFamily: 'DancingScript-SemiBold',
                      marginLeft: 10,
                      color: widgetChoosen ? '#fff' : iColor,
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
              borderColor: iColor,
              marginVertical: 15,
              paddingLeft: 10,
            }}>
            <TextInput
              style={{fontFamily: 'DancingScript-Regular', width: '100%'}}
              placeholder="Name of the Widget"
              value={widgetName}
              onChangeText={text => setWidgetName(text)}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 51,
              backgroundColor: iColor,
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

export default Introspection;
