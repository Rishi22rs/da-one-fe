import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Header} from '../../components/Header';
import {createStyleSheet} from './style';
import socket from '../../utils/socket';

const mockMessages = [
  {
    id: '1',
    text: 'Hey! Do you want to meet up this week?',
    time: '20:45',
    sender: 'other',
  },
  {
    id: '2',
    text: 'Sure, we should go out or something at the weekend.',
    time: '20:47',
    sender: 'me',
  },
  {id: '3', text: 'Let’s do lunch on Sunday.', time: '20:50', sender: 'other'},
  {
    id: '4',
    text: 'I can’t on Sunday. But I can on Saturday. We could go to the cinema after.',
    time: '20:55',
    sender: 'me',
  },
  {
    id: '5',
    text: 'Ok, then, sounds good. I’ll pick you up at 2 on Saturday.',
    time: '21:02',
    sender: 'other',
  },
  {id: '6', text: 'Cool, see you then!', time: '21:12', sender: 'me'},
  {id: '7', text: 'See you!', time: '21:13', sender: 'other'},
];

export const Chat = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList>(null);
  const styles = createStyleSheet();

  useEffect(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({animated: false});
    }, 100);
  }, []);

  useEffect(() => {
    socket.emit('joinRoom', {userId: 'user_id', otherUserId: 'other_user_id'});

    socket.on('receiveMessage', msg => {
      console.log('messagegege aay', msg);
      setMessages(prev => [...prev, msg]);
      flatListRef.current?.scrollToEnd({animated: true});
    });

    return () => {
      socket.emit('leaveRoom', {
        userId: 'user_id',
        otherUserId: 'other_user_id',
      });
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      sender: 'me',
    };
    socket.emit('sendMessage', newMessage);
    setMessages(prev => {
      const updated = [...prev, newMessage];

      setTimeout(() => {
        flatListRef.current?.scrollToEnd({animated: true});
      }, 100);

      return updated;
    });

    setInput('');
  };

  const renderItem = ({item}) => {
    const isMe = item.sender === 'me';
    return (
      <View
        style={[
          styles.messageBubble,
          isMe ? styles.myMessage : styles.theirMessage,
        ]}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    );
  };

  return (
    <>
      <Header />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}>
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messagesContainer}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({animated: true})
          }
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Text style={styles.sendButton}>📨</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
