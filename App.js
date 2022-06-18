import * as Font from 'expo-font';
import { StyleSheet, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/theme/colors';
import PlanetScreen from './src/screens/PlanetScreen';


const Stack = createNativeStackNavigator();

/*------------------- custom theme -------------------*/

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: colors.dark,
	}
}

export default function App() {

	/*------------------- load custom font -------------------*/

	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		async function loadFont() {
			await Font.loadAsync({
				'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
				'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
				'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
			});
			setFontLoaded(true);
		}
		loadFont();
	}, []);

	if (!fontLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor={colors.dark} />
			<NavigationContainer theme={MyTheme}>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Planet" component={PlanetScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	//
});
