import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {ButtonOutline} from 'react-native-ui-buttons';


const App = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text style={styles.heading}>ButtonOutline (enabled)</Text>
                <ButtonOutline
                    title={'Test Button'}
                    onPress={() => console.debug('Button Outline Pressed')}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20,
        fontSize: 30,
    },
    container: {
        padding: 20,
    },
});

export default App;
