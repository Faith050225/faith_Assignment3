// Define the structure of a Course object.
export type Course = {
    id: string;
    name: string;
    fee: number;
    purpose: string;
    content: string[];
  };
  
  // Define the parameters for the screens in your navigation stack.
  export type RootStackParamList = {
    Home: undefined;  // Home screen doesn't need parameters.
    Register: { selectedCourse: Course };  // Register screen expects a course.
    CourseDetails: { course: Course };  // Course details screen needs a course.
    QuoteCalculator: { course: Course };  // Quote calculator expects a course.
    ContactScreeen:undefined;
  };