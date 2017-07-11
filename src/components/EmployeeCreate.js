import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common'
import { employeeUpdate } from '../actions';
import { connect } from 'react-redux';

class EmployeeCreate extends Component {
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
                        onChangeText={value  => this.props.employeeUpdate({ prop: 'phone ', value })}
                        />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>
                        save
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);