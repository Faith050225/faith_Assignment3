

###Skills Training App

This is a React Native mobile app designed for the Empowering the Nation initiative. It provides course information, allows users to register for courses, calculate course quotes, and contact the organization.

Table of Contents

Features

Installation

Usage

Screens

Dependencies

Contributing

License



---

###Features

Display available courses with detailed descriptions.

Register for courses directly from the app.

Calculate quotes based on selected courses.

Navigate easily between different screens using React Navigation.

View organization contact information and Google Maps location.



---

Installation

1. Clone the repository:

git clone https://github.com/your-username/skills-training-app.git
cd skills-training-app


2. Install dependencies:

npm install


3. Install pods (for iOS):

cd ios && pod install && cd ..


4. Run the app:

npx react-native run-android   # For Android
npx react-native run-ios       # For iOS




---

Usage

1. On the Home Screen, browse through the list of available courses.


2. Tap on a course to view details and register.


3. Use the Quote Calculator to get an estimate based on selected courses.


4. Navigate to the Contact screen for organization information and Google Maps location.




---

Screens

HomeScreen: Displays a list of courses.

CourseDetails: Shows detailed information about a selected course.

RegisterScreen: Allows users to register for a course.

QuoteCalculator: Calculates the total fee for selected courses.

ContactScreen: Displays contact information and an embedded Google Map.



---

Dependencies

React Native: Core framework for the mobile app.

React Navigation: Handles screen navigation.

TypeScript: For static type checking.

Google Maps React Native: Embeds Google Maps within the app.


To install React Navigation and dependencies:

npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-async-storage/async-storage

For Google Maps:

npm install react-native-maps


---

Contributing

1. Fork the repository.


2. Create a feature branch: git checkout -b feature-name.


3. Commit your changes: git commit -m "Add new feature".


4. Push to the branch: git push origin feature-name.


5. Open a Pull Request.




---

License

This project is licensed under the MIT License. See the LICENSE file for details.


---

Contact

For inquiries or support, please contact:

Email: example@email.com

Phone: +27 123 456 789

Location: Embedded Google Map available in the Contact section of the app.



---

Feel free to further adjust the README.md based on your project details or add more sections, such as FAQs or screenshots, if needed!
