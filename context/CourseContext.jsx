import { createContext } from "react";

const CourseContext = createContext({
  courses: [],
  setCourses: () => {},
  theme: 'light',
  toggleTheme: () => {}
});

export default CourseContext;