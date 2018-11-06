import React, {Component} from 'react';
import { View, Text } from "react-native";
import styles from "../../assets/styles";

export default class ErrorView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.rowsCentered}>
          <Text>ERROR Loading Data</Text>
        </View>
      </View>
    );
  }
}
