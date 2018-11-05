
import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import styles from "../../assets/styles";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: styles.headerStyle,
    headerTintColor: '#ffffff'
  };

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.rows}>
          <Button title="ABC News" borderRadius={3} containerViewStyle={styles.buttonContainerView} buttonStyle={styles.button} large raised />
        </View>
        <View style={styles.rows}>
          <Button title="DEF News" borderRadius={3} containerViewStyle={styles.buttonContainerView} buttonStyle={styles.button} large raised />
        </View>
        <View style={styles.rows}>
          <Button title="GHI News" borderRadius={3} containerViewStyle={styles.buttonContainerView} buttonStyle={styles.button} large raised />
        </View>
        <View style={styles.rows}>
          <Button title="JKL News" borderRadius={3} containerViewStyle={styles.buttonContainerView} buttonStyle={styles.button} large raised />
        </View>
      </View>
    );
  }
}
