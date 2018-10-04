import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {  Button} from 'native-base';
import VideoRecorder from 'react-native-beautiful-video-recorder';
// import { RNCamera } from 'react-native-camera';
// import { Camera, Permissions } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default class CameraExample extends React.Component {
//   state = {
//     hasCameraPermission: null,
//     type: Camera.Constants.Type.back,
//   };

//   async componentWillMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//   }
//   async startRecording() {
//     this.setState({ recording: true });
//     // default to mp4 for android as codec is not set
//     const { uri, codec = "mp4" } = await this.camera.recordAsync();
//   }

//   stopRecording() {
//       this.camera.stopRecording();
//   }

//   render() {
//     const { hasCameraPermission,recording, processing } = this.state;
//     let button = (
//       <TouchableOpacity
//         onPress={this.startRecording.bind(this)}
//         // style={styles.capture}
//       >
//         <Text style={{ fontSize: 14 }}> RECORD </Text>
//       </TouchableOpacity>
//     );
//     if (recording) {
//       button = (
//         <TouchableOpacity
//           onPress={this.stopRecording.bind(this)}
//           // style={styles.capture}
//         >
//           <Text style={{ fontSize: 14 }}> STOP </Text>
//         </TouchableOpacity>
//       );
//     }
//     if (processing) {
//       button = (
//         <View style={styles.capture}>
//           <ActivityIndicator animating size={18} />
//         </View>
//       );
//     }
//     if (hasCameraPermission === null) {
//       return <View />;
//     } else if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera style={{ flex: 1 }} type={this.state.type}>
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//               }}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.1,
//                   alignSelf: 'flex-end',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type: this.state.type === Camera.Constants.Type.back
//                       ? Camera.Constants.Type.front
//                       : Camera.Constants.Type.back,
//                   });
//                 }}>
//                 <Text
//                   style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
//                   {' '}Flip{' '}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//           <View
//           style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
//         >
//           {button}
//         </View>
//         </View>
//       );
//     }
//   }
// }