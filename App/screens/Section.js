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
import uuid from 'react-native-uuid';
import ConfirmModal from '../components/common/ConfirmModal';
import NormalModal from '../components/common/NormalModal';
import Widget from './Widget';
import Layout from './Layout';
import BottomNav from '../common/BottomNav';

const {themeColor, alignHorizontal, blackColor, redColor} = commonStyles();
const styles = StyleSheet.create({
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
  actionButton: {
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Section = ({navigation, widgets, name, color}) => {
  const dispatch = useDispatch();
  const {card, container} = styles;
  const [screenState, setScreenState] = useState('initial');
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const OPTIONS = [
    {name: 'Todos', family: 'Octicons', icon: 'checklist'},
    {name: 'Notes', family: 'MaterialCommunityIcons', icon: 'notebook'},
    {name: 'Lists', family: 'FontAwesome5', icon: 'clipboard-list'},
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
          id: uuid.v4(),
          name: widgetName,
          family: option.family,
          icon: option.icon,
          type: selectedWidget,
        },
      ];
      changeSection(newWidgets);
      setModalOpen(false);
      setSelectedWidget(null);
      setWidgetName(null);
    }
  };

  const changeSection = newWidgets => {
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
  };

  const deleteWidget = () => {
    const newWidgets = widgets.filter(widget => widget.id !== deleteId);
    changeSection(newWidgets);
    setConfirmModalOpen(false);
  };

  return (
    <Layout>
      <Header text={name} />
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
              widgets?.map((widget, i) => {
                return (
                  <TouchableOpacity
                    style={card}
                    key={i}
                    onPress={() => {
                      // setScreenState(widget.type);
                      navigation.navigate('WidgetScreen', {
                        type: widget.type,
                        section: name,
                        color,
                        id: widget.id,
                      });
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        paddingHorizontal: 10,
                        marginTop: -15,
                      }}>
                      <TouchableOpacity
                        style={[
                          styles.actionButton,
                          // {backgroundColor: blackColor},
                        ]}>
                        <DynamicIcon
                          family="MaterialIcons"
                          name="more"
                          size={25}
                          // color="#fff"
                          color={blackColor}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.actionButton,
                          // {backgroundColor: redColor},
                        ]}
                        onPress={() => {
                          setConfirmModalOpen(true);
                          setDeleteId(widget.id);
                        }}>
                        <DynamicIcon
                          family="MaterialIcons"
                          name="delete"
                          size={27}
                          // color="#fff"
                          color={redColor}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 5}}>
                      <DynamicIcon
                        family={widget.family}
                        name={widget.icon}
                        size={40}
                        color={color}
                      />
                    </View>

                    <Text
                      style={{
                        fontFamily: 'DancingScript-Bold',
                        fontSize: 18,
                        marginHorizontal: 5,
                      }}>
                      {widget.name}
                    </Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <Widget type={screenState} section={name} />
            )}
          </View>
        </ScrollView>
      </View>
      <BottomNav
        navigation={navigation}
        color={color}
        buttonText="Add Widget"
        callback={() => setModalOpen(true)}
      />
      {/* {modalOpen ? ( */}

      <BottomModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <View style={{marginVertical: 15, marginHorizontal: '6%'}}>
          <Text
            style={{
              marginVertical: 10,
              // fontFamily: 'Roboto-Regular',
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
                    size={20}
                    color={widgetChoosen ? '#fff' : color}
                  />
                  <Text
                    style={{
                      fontFamily: 'DancingScript-SemiBold',
                      // fontFamily: 'Poppins-Regular',

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
      <NormalModal
        modalOpen={confirmModalOpen}
        setModalOpen={setConfirmModalOpen}>
        <ConfirmModal
          header="Delete Widget"
          message="Are you sure you want to delete this widget?"
          setModalOpen={setConfirmModalOpen}
          callback={deleteWidget}
          color={color}
        />
      </NormalModal>
      {/* ) : null} */}
    </Layout>
  );
};

export default Section;
