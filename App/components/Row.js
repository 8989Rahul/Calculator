import React from "react";
import { View } from "react-native";

export default ({ children }) => (
  <View style={{ flexDirection: "row" }}>{children}</View>
);

// // Importing functionality from external packages
// import React from "react";
// import { View } from "react-native";

// // ///////////////////////////////////////////////////////////////////
// // This component is exported and simply takes in as a parameter
// // all the children passed to it (within the <Row>CHILDREN</Row> tags).
// // All it really does is dictate that items should be distributed
// // horizontally
// // ///////////////////////////////////////////////////////////////////
// export default ({ children }) => (
//   <View style={{ flexDirection: "row" }}>{children}</View>
// );
