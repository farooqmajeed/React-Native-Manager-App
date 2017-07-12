import React, { Component } from 'react';
import { Picker, Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { employeeUpdate, } from '../actions';
import { connect } from 'react-redux';


class EmployeeForm extends Component {



    render() {
        return (
            <Card>
                <CardSection>

                    <Input
                        label="Name"
                        placeholder="Farooq"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        />
                </CardSection>

                <CardSection>
                    <Input
                        label="phone"
                        placeholder="03323431306"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                        />
                </CardSection>

                <CardSection>
                    <Text style={styles.PickerTextStyle}> Shift</Text>
                    <Picker
                        style={{ flex: 1, marginLeft: 75 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

            </Card>
        );
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

const styles = {
    PickerTextStyle: {
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 15
    }
};
export default connect(mapStateToProps, {
    employeeUpdate,
})(EmployeeForm);