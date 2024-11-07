import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../styles/styles';

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Buy groceries' },
    { id: '2', title: 'Walk the dog' },
    { id: '3', title: 'Do laundry' },
  ]);

  const user = useSelector((state) => state.user);


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  useEffect(() => {
    // Fetch todos from the server

    alert(user.isAuth)
    // setTodos(response.data);

  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Todo;
