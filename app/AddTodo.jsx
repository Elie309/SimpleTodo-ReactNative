import React, { useEffect, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../styles/styles';
import ButtonApp from '../components/ButtonApp';
import { Firestore } from 'firebase/firestore';

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  
  const handleAddTodo = () => {
    if(!title || !text) {
      alert('Please fill in all fields');
      return;
    }
    try {
       Firestore().collection('todos').add({
        title,
        text,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      alert('Todo added successfully');
      setTitle('');
      setText('');
    } catch (error) {
      alert('Error adding todo', error.message);
    }


  };

  useEffect(() => {
      setTitle('');
      setText('');
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.title}>Write your todo details</Text>
      <TextInput
        style={{
          ...styles.input,
          height: 150,
          textAlignVertical: 'top',
        }}
        value={text}
        onChangeText={setText}
      />

      <ButtonApp  style={styles.button} title="Add" onPress={handleAddTodo} />
    </View>
  );
};



export default AddTodo;
