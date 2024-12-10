import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      {/* Logo */}
      <Image 
      source={require('../assets/pneuspeedy-removebg-preview.png')}
      style={styles.logoImage}
      resizeMode="contain"
    />

      {/* Contact Info */}
      <View style={styles.contactRow}>
        <FontAwesome name="phone" size={20} color="black" style={styles.icon} />
        <Text style={styles.text}>(514) 624-0229</Text>
      </View>

      <View style={styles.contactRow}>
        <FontAwesome name="envelope" size={20} color="black" style={styles.icon} />
        <Text style={styles.text}>info@pneuspeedy.com</Text>
      </View>

      <View style={styles.contactRow}>
        <FontAwesome name="map-marker" size={20} color="black" style={styles.icon} />
        <Text style={styles.text}>Montreal, QC</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#f2f2f2', // Light gray background
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 20,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Footer;
