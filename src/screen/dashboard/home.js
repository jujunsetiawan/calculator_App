import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView
} from 'react-native';
// import {connect} from 'react-redux';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calculator: 0,
      history: []
    }
  }

  hitung = (value) => {
    if (this.state.calculator == 0) {
      this.setState({ calculator: value })
    } else {
      this.setState({ calculator: this.state.calculator + '' + value })
    }
  }

  hasil = () => {
    const hasilhitung = eval(this.state.calculator)
    this.setState({ calculator: hasilhitung })
    this.addHistory()
  }

  del() {
    const str = this.state.calculator;
    const deleted = str.substring(0, str.length - 1);
    this.setState({calculator: deleted});
  }

  addHistory() {
    const {calculator, result} = this.state;
    this.setState({history: [...this.state.history, calculator]});
    // if (calc !== '') {
    //   this.props.addHistory(calc);
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Kalkulator</Text>
        </View>
            <ScrollView style = {{flex:1, backgroundColor: "white"}}>
            {this.state.history.map((history, index) => (
              <View key={index} style = {{flex:1}}>
                <Text style={styles.textinput2}>{history}</Text>
                <Text>  = {eval(history)}</Text>
              </View>
            ))}
            </ScrollView>
        <View style={{backgroundColor: "white", alignItems: "flex-end", height: 50 }}>
          <Text style={styles.textinput} >{this.state.calculator}</Text>
        </View>
        <View style={{flex: 1,backgroundColor: "dodgerblue"}}>
          <View style={{flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => this.setState({ calculator: 0 })}
              style={styles.button}>
              <Text style={styles.text}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung('/')}
              style={styles.button}>
              <Text style={styles.text}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung('*')}
              style={styles.button}>
              <Text style={styles.text}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress = {() => this.del()}
            style={styles.button}>
              <Text style={styles.text}>Del</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => this.hitung(7)}
              style={styles.button}>
              <Text style={styles.text1}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung(8)}
              style={styles.button}>
              <Text style={styles.text1}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung(9)}
              style={styles.button}>
              <Text style={styles.text1}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung('-')}
              style={styles.button}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => this.hitung(4)}
              style={styles.button}>
              <Text style={styles.text1}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung(5)}
              style={styles.button}>
              <Text style={styles.text1}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung(6)}
              style={styles.button}>
              <Text style={styles.text1}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung('+')}
              style={styles.button}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => this.hitung(1)}
              style={styles.button}>
              <Text style={styles.text1}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung(2)}
              style={styles.button}>
              <Text style={styles.text1}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung(3)}
              style={styles.button}>
              <Text style={styles.text1}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung('(')}
              style={styles.button}>
              <Text style={styles.text} >( )</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => this.hitung(0)}
              style={styles.button}>
              <Text style={styles.text1}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung('.')}
              style={styles.button}>
              <Text style={styles.text1}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hitung(')')}
              style={styles.button}>
              <Text style={styles.text1}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.hasil()}
              style={styles.button}>
              <Text style={styles.text2}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     history: state.history,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addHistory: (data) =>
//       dispatch({
//         type: 'ADD',
//         data: data,
//       }),
//     clearHistory: () =>
//       dispatch({
//         type: 'CLEAR',
//       }),
//   };
// };

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  header: {
    justifyContent: "center",
    height: 50,
    width: "100%",
    backgroundColor: "tomato"
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    marginLeft: 15,
  },
  textinput: {
    fontSize: 35,
    marginHorizontal: 5
  },
  textinput2: {
    fontSize: 25,
    marginHorizontal: 5
  },
  button: {
    flex: 1,
    height: 52,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "dodgerblue",
    fontWeight: "bold",
    fontSize: 30
  },
  text1: {
    fontWeight: "bold",
    fontSize: 30
  },
  text2: {
    color: "green",
    fontWeight: "bold",
    fontSize: 30
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: "white",
    fontWeight: 'bold'
  }
});