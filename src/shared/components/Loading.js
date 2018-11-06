import React, {Component} from 'react';
import { ActivityIndicator, Image, View, Text } from "react-native";
import styles from "../../assets/styles";

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { animating } = this.props;
    return (
      <View style={styles.body}>
        <View style={styles.rowsCentered}>
          <ActivityIndicator animating={animating} size="large" hidesWhenStopped={true} />
          <Text>Loading News Data</Text>
        </View>
      </View>
    );
  }
}
