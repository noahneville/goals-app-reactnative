import { StyleSheet, View, TextInput, Button } from 'react-native';

function GoalInput(props) {
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='your course goal!'
        onChangeText={props.goalInputHandler}
        value={props.textValue}
      />
      <Button
        title='Add Goal'
        onPress={props.addGoalHandler}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;