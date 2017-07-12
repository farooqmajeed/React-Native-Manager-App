import React, { Component } from 'react';
import { View, Text, ListView, TouchableWithoutFeedback } from 'react-native';
import { Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

    onRowPress(){
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}  >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
export default ListItem;
