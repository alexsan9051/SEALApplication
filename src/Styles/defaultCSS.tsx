import { StyleSheet } from 'react-native';

const stylesheet = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        rowGap: 10,
        padding: 10,
    },
    defaultColor: '#305070',
    defaultText:{
        fontFamily: 'Helvetica Neue',
        color: '#305070',
    },
    textNormal: {
        fontSize: 16,
        fontStyle: 'normal',
        ...this.defaultText
    },
});

export default stylesheet;