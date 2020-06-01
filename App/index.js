/* eslint-disable react/state-in-constructor */
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import Row from "./components/Row";
import Button from "./components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
  },
});

export default class App extends React.Component {
  state = {
    currentValue: "0",
  };

  handleTap = (type, value) => {
    this.setState((state) => {
      if (type === "number") {
        if (state.currentValue === "0") {
          return { currentValue: `${value}` };
        }
        return { currentValue: `${state.currentValue}${value}` };
      }
      return state;
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          <Row>
            <Button text="c" theme="secondary" onPress={() => alert("todo")} />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => alert("todo")}
            />
            <Button text="%" theme="secondary" onPress={() => alert("todo")} />
            <Button text="/" theme="accent" onPress={() => alert("todo")} />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button text="x" theme="accent" onPress={() => alert("todo")} />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button text="-" theme="accent" onPress={() => alert("todo")} />
          </Row>

          <Row>
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="+" theme="accent" onPress={() => alert("todo")} />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap("number", 0)}
            />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button text="=" theme="accent" onPress={() => alert("todo")} />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
