import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import db from '../config';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      allStudents: [],
      presentList: [],
      absentList: [],
    };
  }

  componentDidMount() {
    this.fetchInfo();
  }

  fetchInfo = async () => {
    var class_ref = await db.ref('/').on('value', (data) => {
      var allStudents = [];
      var class_a = data.val()['class'];
      for (var i in class_a) {
        allStudents.push(class_a[i]);
      }
      allStudents.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });
      this.setState({ allStudents: allStudents });
    });
  };

updateAttendance(roll_no,status){
  var id = '';
  if (roll_no <= 3){
    id = '0' +roll_no;
  } else{
    id = roll_no;
  }

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;

var yyyy = today.getFullYear();
if(dd<10){
  dd = '0' + dd;
}
if (mm<10){
  mm = '0' + mm;
}
today = dd + '-' + mm + '-' +yyyy;
var ref_path = '/class/' + id;
var class_ref = db.ref(ref_path);
class_ref.update({
  [today]:status,
});
}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center', marginBottom: 20 }}>
          School Attendance
        </Text>
        {this.state.allStudents.map((student) => (
          <View style = {{flexDirection:'row'}}>
          <Text
            style={{
              marginBottom: 20,
              width: 100,
              alignSelf: 'center',
            }}>
            {student.roll_no}
          </Text>
          <Text
            style={{
              marginBottom: 20,
              width: 100,
              alignSelf: 'center',
            }}>
            {student.name}
          </Text>
          <TouchableOpacity onPress = {()=>{this.updateAttendance(student.roll_no,'present')}}>
          <Text
            style={{
              borderWidth:2,
              marginBottom: 20,
              width: 50,
              alignSelf: 'center',
            }}>
            present
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {()=>{this.updateAttendance(student.roll_no,'absent')}}>
          <Text
            style={{
              marginLeft:5,
              borderWidth:2,
              marginBottom: 20,
              width: 50,
              alignSelf: 'center',
            }}>
            absent
          </Text>
          </TouchableOpacity>
          </View>
        ))}
        <Button title="Submit" onPress={this.resetDb} />
      </View>
    );
  }
}
