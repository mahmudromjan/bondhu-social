import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet
} from 'react-native';

export default function App() {
  return (
    <View style={s.page}>
      <Text style={s.logo}>Bondhu Social 💙</Text>
      <Text style={s.tag}>Connect with everyone</Text>

      <TextInput
        placeholder="What's on your mind?"
        style={s.input}
      />

      <ScrollView>
        <View style={s.post}>
          <Text style={s.name}>Rahim Ahmed</Text>
          <Text>Welcome to Bondhu Social! 🎉</Text>
          <Text style={s.action}>♡ Like     💬 Comment</Text>
        </View>

        <View style={s.post}>
          <Text style={s.name}>Karim Hasan</Text>
          <Text>Let's make new friends! 🤝</Text>
          <Text style={s.action}>♡ Like     💬 Comment</Text>
        </View>

        <View style={s.post}>
          <Text style={s.name}>Your Community</Text>
          <Text>Share your moments with friends.</Text>
          <Text style={s.action}>♡ Like     💬 Comment</Text>
        </View>
      </ScrollView>

      <Text style={s.nav}>
        🏠 Home     🔍 Search     👤 Profile
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F1F5FB',
    paddingTop: 45,
    paddingHorizontal: 16
  },
  logo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#2463EB'
  },
  tag: {
    color: '#666',
    marginBottom: 20
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 16
  },
  post: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 14,
    marginBottom: 14
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10
  },
  action: {
    color: '#2463EB',
    marginTop: 16
  },
  nav: {
    backgroundColor: 'white',
    padding: 16,
    textAlign: 'center',
    color: '#2463EB',
    fontWeight: 'bold'
  }
});