import React from 'react';
import {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class History extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.history.map((history, index) => (
          <View key={index} style={styles.history}>
            <Text style={styles.historyCalc}>{history}</Text>
            <Text style={styles.historyResult}>{eval(history)}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHistory: (data) =>
      dispatch({
        type: 'ADD',
        data: data,
      }),
    clearHistory: () =>
      dispatch({
        type: 'CLEAR',
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  history: {
    padding: 8,
    borderBottomWidth: 1,
    margin: 8,
  },
  historyCalc: {
    fontSize: 12,
  },
  historyResult: {
    fontSize: 16,
    color: '#1f1f1f',
  },
});