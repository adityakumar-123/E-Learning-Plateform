import React from "react";

import { View } from "react-native";
import { Menu, Provider, IconButton } from "react-native-paper";

const NoticeBoardScreen = (props) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Provider>
      <View
        style={{
          paddingLeft: 150,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon="bell-ring"
              color="tomato"
              size={30}
              onPress={openMenu}
            />
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};
export default NoticeBoardScreen;
