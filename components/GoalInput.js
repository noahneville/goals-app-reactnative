import { StyleSheet, Modal, View, TextInput, Button } from 'react-native';

function GoalInput(props) {

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='your course goal!'
          onChangeText={props.goalInputHandler}
          value={props.textValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              onPress={props.addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button 
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '90%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  button: {
    marginHorizontal: 8,
    width: '30%'
  },
});

export default GoalInput;