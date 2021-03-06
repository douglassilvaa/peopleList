import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Aqui o node irá procurar o arquivo "index.js" dentro do diretório "util"
import { capitalizeFirstLetter } from  '../util';

const PeopleListItem = props => {
    const { person, navigateToPeopleDetail } = props;
    const { title, first, last } = person.name;
    let titulo;
    if(title == 'Mr'){
        titulo = "Sr";
    }else{
        titulo = "Sra";
    }
    return(
        <View style={styles.borderLine}>
            <TouchableOpacity onPress={() => navigateToPeopleDetail({ person }) }>
                <View style={styles.line}>
                    <Image style={styles.avatar} source={{ uri: person.picture.thumbnail }} />
                    <Text style={styles.lineText}>
                        { `${capitalizeFirstLetter(titulo)}. ${first} ${last}` }
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    borderLine: {
        borderBottomWidth: 1,
        borderColor: '#bbb',
    },
    line: {
        height: 60,
        // borderBottomWidth: 1,
        // borderColor: '#bbb',

        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        // O aspectRatio mantém as proporções originais da imagem, ou seja, uma img de 40X40 se for aumentada para 50 de largura ficará 50X50
        aspectRatio: 1,
        flex: 1,

        marginLeft: 15,
        borderRadius: 50,
    },
});

export default PeopleListItem;