import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from './common'

class EmployeeList extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text> Employee List </Text>
                </CardSection>
                <CardSection>
                    <Text> Employee List </Text>
                </CardSection>
                <CardSection>
                    <Text> Employee List </Text>
                </CardSection>
                <CardSection>
                    <Text> Employee List </Text>
                </CardSection>

            </Card>
        );
    }
}

export default EmployeeList;