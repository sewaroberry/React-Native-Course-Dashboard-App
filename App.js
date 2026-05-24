import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseContext from './context/CourseContext';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [courses, setCourses] = useState([
    {
      id: '1',
      name: 'Data Structures', 
      state: 'Lecture', 
      time: '10:00 - 11:00 AM',
      overview: 'Learn about arrays, linked lists, trees, and algorithms. This course covers fundamental data structures and their applications in problem-solving.'
    },
    {
      id: '2', 
      name: 'Web Programming', 
      state: 'Lab', 
      time: '1:00 - 2:30 PM',
      overview: 'Build modern websites using HTML, CSS, and JavaScript. Hands-on labs will focus on creating responsive web applications and user interfaces.'
    },
    {
      id: '3', 
      name: 'Mobile Programming', 
      state: 'Lecture', 
      time: '2:00 - 3:00 PM',
      overview: 'Develop mobile applications using React Native. Learn about mobile UI design, navigation, state management, and deploying apps to devices.'
    },
    {
      id: '1',
      name: 'Data Structures', 
      state: 'Lecture', 
      time: '10:00 - 11:00 AM',
      overview: 'Learn about arrays, linked lists, trees, and algorithms. This course covers fundamental data structures and their applications in problem-solving.'
    },
    {
      id: '2', 
      name: 'Web Programming', 
      state: 'Lab', 
      time: '1:00 - 2:30 PM',
      overview: 'Build modern websites using HTML, CSS, and JavaScript. Hands-on labs will focus on creating responsive web applications and user interfaces.'
    },
    {
      id: '3', 
      name: 'Mobile Programming', 
      state: 'Lecture', 
      time: '2:00 - 3:00 PM',
      overview: 'Develop mobile applications using React Native. Learn about mobile UI design, navigation, state management, and deploying apps to devices.'
    },
  ]);

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const sharedData = {courses, setCourses, theme, toggleTheme};

  return (
    <CourseContext.Provider value={sharedData}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Course" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CourseContext.Provider>
  );
}