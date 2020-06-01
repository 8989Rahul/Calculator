import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 35,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
  textSecondary: {
    color: "#060606",
  },
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyle = [styles.button];
  const textStyle = [styles.text];

  if (size === "double") {
    buttonStyle.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyle.push(styles.buttonSecondary);
    textStyle.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyle.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

// // Importing functionality from external packages
// import React from "react";
// import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

// // Dimensions are a react-native item that gets screen size
// const screen = Dimensions.get("window");
// const buttonWidth = screen.width / 4;

// // Styles for component
// const styles = StyleSheet.create({
//   text: {
//     color: "#fff",
//     fontSize: 25,
//   },
//   button: {
//     backgroundColor: "#333333",
//     flex: 1,
//     height: Math.floor(buttonWidth - 10),
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: Math.floor(buttonWidth),
//     margin: 5,
//   },
//   buttonDouble: {
//     // width: screen.width / 2 - 10,
//     flex: 2,
//     alignItems: "flex-start",
//     paddingLeft: 40,
//   },
//   buttonSecondary: {
//     backgroundColor: "#A6A6A6",
//     color: "#000",
//   },
//   textSecondary: {
//     color: "#060606",
//   },
//   buttonAccent: {
//     backgroundColor: "#F09A36",
//   },
// });

// // ///////////////////////////////////////////////////////////////////
// // This component is a button and is exported:
// // Parameters:
// //    onPress - A method to call when the button is pressed
// //    text - Text to display on the button
// //    size - Size of the button ("double"; anything else will do standard size)
// //    theme - Color/style of button ("secondary" or "accent")
// // ///////////////////////////////////////////////////////////////////
// export default ({ onPress, text, size, theme }) => {
//   // Get basic button styles
//   const buttonStyles = [styles.button];
//   const textStyles = [styles.text];

//   // If size is passed in as double, push that style
//   if (size === "double") buttonStyles.push(styles.buttonDouble);

//   // Check theme and add to styles as necessary
//   if (theme === "secondary") {
//     buttonStyles.push(styles.buttonSecondary);
//     textStyles.push(styles.textSecondary);
//   } else if (theme === "accent") {
//     buttonStyles.push(styles.buttonAccent);
//   }

//   // Actual JSX to return which just specifies button
//   return (
//     <TouchableOpacity onPress={onPress} style={buttonStyles}>
//       <Text style={textStyles}>{text}</Text>
//     </TouchableOpacity>
//   );
// };
