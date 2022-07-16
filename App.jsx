import React, { useEffect, useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import uuid from 'react-native-uuid';

import { COLORS } from './src/constants/style';
import Navbar from './src/components/Navbar';
import AddTodo from './src/components/AddTodo';
import Todo from './src/components/Todo';
import { getStorageObjData, setStorageObjData } from './src/helpers/storageHelper';
import { STORAGE } from './src/constants/storage';

const App = () => {
  const [todos, setTodos] = useState([]);

  const setTodosFromStorage = async () => {
    const storageTodos = await getStorageObjData(STORAGE.todos);
    if (storageTodos) {
      setTodos(storageTodos);
    }
  };

  useEffect(() => {
    setTodosFromStorage();
  }, []);

  const addTodo = async (title) => {
    const storageTodos = await getStorageObjData(STORAGE.todos);
    const newTodos = [{ id: uuid.v4(), title }, ...(storageTodos || [])];

    const satedTodos = await setStorageObjData(STORAGE.todos, newTodos);
    if (satedTodos) {
      setTodos(satedTodos);
    }
  };

  const removeTodo = async (id) => {
    const storageTodos = await getStorageObjData(STORAGE.todos);
    const filteredTodos = storageTodos.filter((todo) => todo.id !== id);
    const satedTodos = await setStorageObjData(STORAGE.todos, filteredTodos);
    if (satedTodos) {
      setTodos(satedTodos);
    }
  };

  return (
    <View style={styles.app}>
      <StatusBar style="inverted" />

      <Navbar title="Todo App" />

      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          style={styles.scrollViewContainer}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onClear={removeTodo} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.primary,
  },
  container: {
    paddingHorizontal: 10,
  },
  scrollViewContainer: {
    marginVertical: 20,
    height: Dimensions.get('window').height - 174,
  },
});

export default App;
