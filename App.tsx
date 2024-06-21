import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';

const App = () => {
  const [status, setStatus] = useState('正在連接...');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:3000'); //	use the IP address of your machin

    socket.on('connect', () => {
      setStatus('已連接');
      console.log('已連接到伺服器');
    });

    socket.on('message', data => {
      setMessage(data);
      console.log('伺服器消息:', data);
    });

    // 模擬在10秒後斷開連接;
    setTimeout(() => {
      socket.disconnect();
    }, 10000); // 10秒後斷開連接

    socket.on('disconnect', () => {
      setStatus('已斷開連接');
      setMessage('');
      console.log('已斷開連接');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  status: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  message: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
