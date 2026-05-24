import React, { useContext, useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Pressable } from 'react-native';
import CourseContext from '../context/CourseContext';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const categories = ['Today', 'Exams', 'Projects', 'Personal', 'Hello', 'World', 'My', 'Name', 'Is', 'Sewar'];

const HomeScreen = ({navigation}) => {
  const {courses, theme, toggleTheme} = useContext(CourseContext);
  const [selectedCategory, setSelectedCategory] = useState('Today');

  const containerStyle = (theme == 'light' ? styles.container1 : styles.container2);
  const textStyle = (theme == 'light' ? styles.text1 : styles.text2);
  const cardStyle = (theme == 'light' ? styles.card1 : styles.card2);
  const headerTextStyle = (theme == 'light' ? styles.headerText1 : styles.headerText2);

  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.leftBox}>
            <Text style={[styles.title, headerTextStyle]}>Good {theme == 'light'? 'Morning' : 'Evening'}!</Text>
            <Text style={[styles.name, headerTextStyle]}>Sewar</Text>
          </View>
          <Pressable onPress={toggleTheme} style={styles.themeBtn}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>{theme == 'light'? <Octicons name="moon" size={24} color="white" /> : <Feather name="sun" size={24} color="white" />}</Text>
            </View>
          </Pressable>
        </View>

        <View style={[styles.overview, cardStyle]}>
          <Text style={[styles.title2, textStyle]}>Today's Overview</Text>
          <View style={styles.cont}>
            <View style={styles.box}>
              <Text style={styles.a}>3</Text>
              <Text style={styles.b}>Classes</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.a}>2</Text>
              <Text style={styles.b}>Lectures</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.a}>1</Text>
              <Text style={styles.b}>Labs</Text>
            </View>
          </View>
        </View>

        <Text style={[styles.title3, textStyle]}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catcont}>
            {
                categories.map((category) => (
                    <Pressable onPress={() => setSelectedCategory(category)}>
                    <Text style={selectedCategory === category ? styles.catSelected : styles.cat}>
                        {category}
                    </Text>
                    </Pressable>
                ))
            }
        </ScrollView>

        <Text style={[styles.title3, textStyle]}>Courses Today</Text>
        <ScrollView style={styles.coursesList} showsVerticalScrollIndicator={false}>
            {
                courses.map((course) => (
                    <Pressable onPress={() => navigation.navigate('Course', { course })} style={[styles.courseCard, cardStyle]}>
                        <View style={styles.courseInfo}>
                            <View style={styles.courseDetails}>
                                <Text style={[styles.courseCardText, textStyle]}>{course.name}</Text>
                                <Text style={styles.courseTime}>{course.time}</Text>
                            </View>
                            <Text style={styles.courseType}>{course.state}</Text>
                        </View>
                    </Pressable>
                ))
            }
        </ScrollView>
      </ScrollView>

      <View style={[styles.bottomNav, cardStyle]}>
        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}><Ionicons name="home" size={24} color="gray" /></Text>
          <Text style={styles.navText}>Home</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}><Feather name="book-open" size={24} color="gray" /></Text>
          <Text style={styles.navText}>Courses</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}><Entypo name="add-to-list" size={24} color="gray" /></Text>
          <Text style={styles.navText}>Add</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}><MaterialIcons name="settings" size={24} color="gray" /></Text>
          <Text style={styles.navText}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 14,
  },
  leftBox: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    opacity: 0.8,
    marginBottom: 4,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerText1: {
    color: '#333',
  },
  headerText2: {
    color: '#fff',
  },
  themeBtn: {
    padding: 8,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6B8B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overview: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
  },
  card1: {
    backgroundColor: '#fff',
  },
  card2: {
    backgroundColor: '#2d2d2d',
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    alignItems: 'center',
    backgroundColor: '#FF6B8B',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    minWidth: 80,
  },
  a: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  b: {
    fontSize: 14,
    color: 'white',
    marginTop: 4,
    fontWeight: 'bold',
  },
  catcont: {
    marginBottom: 24,
  },
  cat: {
    margin: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  catSelected: {
    backgroundColor: '#FF6B8B',
    margin: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  title3: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  coursesList: {
    marginBottom: 80,
    height: 240,
  },
  courseCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  courseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  courseDetails: {
    alignItems: 'flex-start',
  },
  courseType: {
    fontSize: 14,
    backgroundColor: '#FF6B8B',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontWeight: '600',
    borderRadius: 24,
    marginBottom: 3,
  },
  courseTime: {
    fontSize: 12,
    marginTop: 2,
    color: 'gray',
  },
  text1: {
    color: '#333',
  },
  text2: {
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'gray',
  },
});

export default HomeScreen;