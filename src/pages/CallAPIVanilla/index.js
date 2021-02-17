import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CallAPIVanilla = () => {
  useEffect(() => {
    // get
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => console.log('Get', json));

    const postData = {
      name: 'morpheus',
      job: 'leader',
    };

    //post
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then((response) => response.json())
    .then((json) => console.log('Post', json));

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call API dengan Vanilla JavaScript</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
  },
});
