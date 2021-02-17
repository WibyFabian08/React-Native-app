import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const CallAPIVanilla = () => {
  const [userData, setUserData] = useState({
    id: '',
    avatar: '',
    first_name: '',
    last_name: '',
    email: '',
  });

  const [jobData, setJobData] = useState({
    name: '',
    job: ''
  });

  const getData = () => {
    // get
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => setUserData(json.data));
  }

  const postData = () => {
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
    .then((json) => {
      console.log('Post', json)
      setJobData(json)
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call API dengan Vanilla JavaScript</Text>
      <Button title='Get Data' onPress={getData}></Button>
      <Text style={styles.deskripsi}>Response Data API</Text>
      <Image source={{uri: userData.avatar}} style={styles.avatar}></Image>
      <Text>{`${userData.id}`}</Text>
      <Text>{`${userData.first_name} ${userData.last_name}`}</Text>
      <Text>{`${userData.email}`}</Text>
      <View style={styles.line}></View>
      <Button title='Post Data' onPress={postData}></Button>
      <Text style={styles.deskripsi}>Post Data API</Text>
      <Text>{jobData.name}</Text>
      <Text>{jobData.job}</Text>
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
    marginBottom: 10
  },  
  deskripsi: {
    marginTop: 10,
    marginBottom: 10
  },
  line: {
    height: 1,
    backgroundColor: 'grey',
    marginBottom: 10,
    marginTop: 10
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
});
