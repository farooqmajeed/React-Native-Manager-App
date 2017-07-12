import React, { Component } from 'react';
import { Card, CardSection, Button } from './common'
import { employeeUpdate, employeeCreate } from '../actions';
import { connect } from 'react-redux';
import EmployeeForm from'./EmployeeForm';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
            <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create Employee
                    </Button>
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
    employeeUpdate, employeeCreate
})(EmployeeCreate);