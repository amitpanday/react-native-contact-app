import React from 'react';
import { Root } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import SideBar from './components/common/sidebar';

import CreateContact from './components/screen/createContact';
import UpdateContact from './components/screen/updateContact';
import ContactList from './components/screen/contactList';
import FavortiteList from './components/screen/favoriteContact';


// Drawer Navigation
const Drawer = createDrawerNavigator(
  {
    ContactList: ContactList,
    FavortiteList: FavortiteList
  },
  {
    initialRouteName: "ContactList",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

// Stack Navigation
const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Drawer: { screen: Drawer },
      CreateContact: CreateContact,
      UpdateContact: UpdateContact
    },
    {
      initialRouteName: "Drawer",
      headerMode: 'none',
    }
  )
);

const App = () => (
  <Root>
    <AppContainer />
  </Root>
)

export default App;