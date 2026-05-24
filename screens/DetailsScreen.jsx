import { useContext } from 'react';
import {Text, View, StyleSheet, ScrollView, Pressable} from 'react-native';
import CourseContext from '../context/CourseContext';

const DetailsScreen = ({navigation, route}) => {
  const {course} = route.params;
  const {theme} = useContext(CourseContext);
  
  const containerStyle = (theme == 'light' ? styles.container1 : styles.container2);
  const textStyle = (theme == 'light' ? styles.text1 : styles.text2);
  const cardStyle = (theme == 'light' ? styles.card1 : styles.card2);

  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{course.state}</Text>
          </View>
          <Text style={[styles.title, textStyle]}>{course.name}</Text>
        </View>

        <View style={[styles.card, cardStyle]}>
          <Text style={[styles.subtitle, textStyle]}>Course Information</Text>
          
          <View style={styles.row}>
            <Text style={[styles.label, textStyle]}>Course Name:</Text>
            <Text style={[styles.value, textStyle]}>{course.name}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={[styles.label, textStyle]}>Time:</Text>
            <Text style={[styles.value, textStyle]}>{course.time}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={[styles.label, textStyle]}>Course ID:</Text>
            <Text style={[styles.value, textStyle]}>{course.id}</Text>
          </View>
        </View>

        <View style={[styles.card, cardStyle]}>
          <Text style={[styles.subtitle, textStyle]}>Course Overview</Text>
          <Text style={[styles.desc, textStyle]}>{course.overview}</Text>
        </View>
        
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.backBtn}>
           <Text style={styles.backtxt}>Go To Home Page</Text>
        </Pressable>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingVertical: 18,
  },
  container1: {
    backgroundColor: '#F5E5E1',
  },
  container2: {
    backgroundColor: '#1a1a1a',
  },
  scroll: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 20,
  },
  backBtn: {
    alignSelf: 'center',
    backgroundColor: '#FF6B8B',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
  },
  backtxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  bc: {
    fontSize: 22,
  },
  badge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 16,
    backgroundColor: '#FF6B8B',
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  card1: {
    backgroundColor: '#fff',
  },
  card2: {
    backgroundColor: '#2d2d2d',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
  },
  text1: {
    color: '#333',
  },
  text2: {
    color: '#fff',
  },
  desc: {
    fontSize: 16,
  },
});

export default DetailsScreen;