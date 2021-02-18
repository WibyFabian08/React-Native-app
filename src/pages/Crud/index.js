import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';

const Item = (props) => {
  return (
    <View style={styles.data}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={styles.poto}
          source={require('../../assests/image/poto.png')}
          ></Image>
      </TouchableOpacity>
      <View style={{marginLeft: 15, flex: 1}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.name}</Text>
        <Text>{props.email}</Text>
        <Text>{props.bidang}</Text>
      </View>
      <TouchableOpacity onPress={props.delete} >
        <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const Crud = () => {
  useEffect(() => {
    getData();
  }, []);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');

  const [users, setUsers] = useState([]);

  const [button, setButton] = useState('SIMPAN');

  const [selectedUser, setSelectedUser] = useState({});

  const submit = () => {
    const data = {
      name: name,
      email: email,
      bidang: bidang,
    };

    if(button == 'SIMPAN') {
        Axios.post('http://10.0.2.2:3004/users', data).then((res) => {
          setName('');
          setEmail('');
          setBidang('');
          getData();
        });
    } else if(button == 'UPDATE') {
        Axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data).then((res) => {
          setName('');
          setEmail('');
          setBidang('');
          setButton('SIMPAN');
          getData();
        });
    }

  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then((res) => {
      setUsers(res.data);
    });
  };

  const selectItem = (item) => {
      setSelectedUser(item);
      setName(item.name);
      setEmail(item.email);
      setBidang(item.bidang);
      setButton('UPDATE')
  };

  const deleteData = (id) => {
    Axios.delete(`http://10.0.2.2:3004/users/${id}`).then((res) => {
        alert("Data Berhasil Dihapus");
        getData();
      });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Halaman Crud Sederhana</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          value={name}
          onChangeText={(value) => setName(value)}></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Bidang"
          value={bidang}
          onChangeText={(value) => setBidang(value)}></TextInput>
        <Button title={button} onPress={submit}></Button>
        <View style={styles.line}></View>
        <Text style={styles.list}>Daftar Anggota</Text>
        {users.map((user) => {
          return (
            <Item
              key={user.id}
              name={user.name}
              email={user.email}
              bidang={user.bidang}
              onPress={() => selectItem(user)}
              delete={() => deleteData(user.id)}
              >
              </Item>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Crud;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 20,
    padding: 15,
    height: 50,
  },
  list: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  line: {
    backgroundColor: 'black',
    height: 1,
    marginTop: 20,
    marginBottom: 10,
  },
  poto: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginTop: 10,
  },
  data: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
