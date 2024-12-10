import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/pneuspeedy-removebg-preview.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Contact Info */}
      <View style={styles.contactContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#f2f2f2', // Light gray background
    padding: 20,
    flexDirection: 'row', // Arrange logo and contact info horizontally
    justifyContent: 'space-between', // Space between logo and contact info
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
  },
  logoContainer: {
    flex: 1,
    flexBasis: '30%', // Adjust as needed
    alignItems: 'center',
  },
  contactContainer: {
    flex: 1,
    flexBasis: '70%', // Adjust as needed
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items at the opposite ends
    alignItems: 'center', // Vertical alignment
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