//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
    setEnteredGoalText('');
  };

  function deleteGoalHandler() {
    console.log('delete');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput 
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        textValue={enteredGoalText}
      />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text} 
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
