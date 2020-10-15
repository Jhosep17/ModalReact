import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Modal , Alert} from 'react-native';



class ModalView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            textTitle: '',
            textDescription: ''

        }
    }

    displayModal(show) {
        this.setState({ isVisible: show })
    }
    printConsol (){
        console.log(this.state.textTitle);
        console.log(this.state.textDescription);
    }

    render() {
        return (
            <View>
                <Modal visible={this.state.isVisible}>
                    <View style={styles.container}>
                        <View style={[styles.fixToText, styles.separator]}>
                            <TouchableHighlight underlayColor='#ecf0f1'
                            onPress={() => { this.displayModal(!this.state.isVisible); }}>
                            <Text style={styles.ButtonModal}>CANCELAR</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor='#ecf0f1'>
                            <Text style={[styles.ButtonModal,styles.textStyleModal]}
                            onPress={()=> {[this.printConsol(),this.displayModal(!this.state.isVisible)]}}>GUARDAR</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TextInput style={styles.textInput} 
                            placeholder='Ingresar Datos'
                            onChangeText={(text) => this.setState({textTitle : text })}
                            />
                            <TextInput style={styles.textInputAll} 
                            multiline
                            numberOfLines={10}
                            placeholder='Ingresar Datos Campo'
                            onChangeText={(text) => this.setState({textDescription : text })}
                            />
                        </View>                    
                    </View>
                </Modal>
                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => this.displayModal(true)}
                    underlayColor='#ecf0f1'>
                    <Text style={[styles.textStyle]}>Agregar Favoritos</Text>
                </TouchableHighlight>
            </View>

        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    textStyleModal: {
        color: "#5089E7",
        fontWeight: "bold"
    },
    openButton: {
        backgroundColor: "#5089E7",
        borderRadius: 20,
        padding: 10,
        paddingTop: 15,
        elevation: 2
    },
    ButtonModal: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    separator: {
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#737373',
        alignItems: 'stretch',
        padding:5,
        margin: 10,
        paddingLeft: 5,
        marginBottom: 15,
        height: 36
    },
    textInputAll: {
        borderWidth: 1,
        borderColor: '#737373',
        margin: 10,
        textAlignVertical: 'top',
        paddingLeft: 5,
        padding:5,
        height: 100
    }

});

export default ModalView;
