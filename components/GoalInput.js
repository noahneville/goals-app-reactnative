import { StyleSheet, Modal, View, TextInput, Button, Image } from 'react-native';
function GoalInput(props) {

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image 
          style={styles.image}
          source={require('../assets/img/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder='your course goal!'
          onChangeText={props.goalInputHandler}
          value={props.textValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="#5e0acc"
              title='Add Goal'
              onPress={props.addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button 
              color="#f31282"
              title="Cancel" 
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '90%',
    padding: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  button: {
    marginHorizontal: 8,
    width: '30%'
  },
  image: {
    width: 100,
    height: 100,
    padding: 8,
  }
});

export default GoalInput;