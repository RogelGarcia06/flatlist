import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/Entypo';


const DATA = [
  {
  id: 1,
  name: "JENEROSE, JULIO",
  place: "Thailand, Bangkok"
},
{
  id: 2,
  name: "JOHN ERONE, JULIO",
  place: "Korea, Seoul"
},
{
  id: 3,
  name: "ROXANNE, GARCIA",
  place: "United Kingdom "
},
{
  id: 3,
  name: "RONIEL, GARCIA",
  place: "Japan, Tokyo"
},
{
  id: 3,
  name: "ROFENDY, GARCIA",
  place: "China "
},
{
  id: 3,
  name: "RODEL, GARCIA",
  place: "Hongkong"
},
{
  id: 3,
  name: "ROGELIO, GARCIA",
  place: "Switzerland "
},
{
  id: 3,
  name: "ANICETA GARCIA",
  place: "Taiwan"
},
{
  id: 3,
  name: "FLORA MAE, REQUILLO",
  place: "India"
},
{
  id: 3,
  name: "ADRIANE JANE, TAHIL",
  place: "Spain"
},
{
  id: 3,
  name: "MONALIZA, LIPARTO",
  place: "Rome, Italy"
},
{
  id: 3,
  name: "JOANA, JAGUNOS",
  place: "Korea, Seoul"
},
{
  id: 3,
  name: "JHANNEL, QUISQUERIN",
  place: "United States of America"
},
{
  id: 3,
  name: "TINAJA, MA. LUISA",
  place: "Taiwan"
},
{
  id: 3,
  name: "MIARAFE, REQUILLO",
  place: "Cambodia"
},

];

const getReciprocatedInitials = (name) => {
  const nameParts = name.split(' ');
  const initials = nameParts.map((part) => part.charAt(0)).join('');
  return initials.split('').reverse().join('').toUpperCase();
};

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <UserAvatar size={50} name={item.name} style={{ backgroundColor: '#0000FF' }}  />
    <Text style={[styles.title, {color: textColor}]}>{item.name}{'\n'}<Text style={{fontWeight:200}}>{item.place}</Text></Text>
    <Icon style={{ marginRight: 10, position: 'absolute', marginLeft: 350}} name="dots-three-horizontal" size={30} color="#000" />
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#00000' : '#fffff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 15
    
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
   
  },
  place: {

  }
});

export default App;