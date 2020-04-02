import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    headerText:{
        fontSize : 15,
        color: '#737380'
    },

    headerTextBold:{
        fontWeight: 'bold',
    },

    title:{
        fontSize: 30,
        marginTop: 16,
        marginBottom: 16,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description:{
        fontSize: 16,
        lineHeight: 24,
        color: "#737380"

    },

    incidentsList:{
        marginTop: 32,
    },

    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
    },

    incidentProperty:{
        fontSize: 14,
        fontWeight: 'bold',
        color: "#41414d"
    },

    incidentValue:{
        marginTop: 8,
        marginBottom: 24,
        color: '#737380',
        fontSize: 15,
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    
    detailsButtonText:{
        color: "#E02041",
        fontSize: 15,
        fontWeight: 'bold',
    },
});