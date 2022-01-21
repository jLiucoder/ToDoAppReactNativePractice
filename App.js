// import * as React, {useState}from 'react';

import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'buy shoes', key: '2'},
    
  ]);

  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=> todo.key != key)
    });
  }

  const submitHandler=(text)=>{
    setTodos((prevTodos)=>{
      let array = [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
      return array

      
    })
  }


  return (
    
    <View style={styles.container}>
     <Header/>
      <View style={styles.header}>

      </View>
      {/**content */}
      <View style={styles.content}>
        <AddTodo submitHandler = {submitHandler}/>
        <View style ={styles.list}>
          <FlatList
            data = {todos}
            renderItem={({item})=>(
              <TodoItem item = {item} pressHandler={pressHandler}/>
            )}
          />

        </View>
      
      </View>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'black'
  },
  content: {
    margin: -30,
    marginBottom: 100,
    padding: 40,
  },
  list:{
    marginTop: 20,
  }
 
});
