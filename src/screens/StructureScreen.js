import React from 'react';
import {
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// galio component
import { Block, Button, Input, Text, NavBar } from 'galio-framework';
import { createStructure } from '../actions/structureActions';
import { connect } from 'react-redux';

import theme from '../constants/theme';

const { height, width } = Dimensions.get('window');

class Structure extends React.Component {

    componentDidMount (

    )

  state = {
    name: '-',
    alias: '-',
    category: '-',
    parent_id: '-',
    user_id: '-',
    mode: '' // edit / new
  }

  submitHandler = () => {
    structureData = {
      name: this.state.name,
      alias: this.state.alias,
      category: this.state.category,
      parent_id: this.state.parent_id,
      user_id: this.state.user.id
    };
    this.props.createStructure(userData);
  };


  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { user, email, password } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Sign Up"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
          />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
         
          <Block flex={2} center space="between">
            <Block flex={2}>
              <Input
                rounded
                placeholder="Name"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('username', text)}
              />
              <Input
                rounded
                type="email-address"
                placeholder="Alias"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('email', text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Type"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />
            
            </Block>
            <Block flex middle>
              <Button
                round
                color="error"
                onPress={this.submitHandler}
              >
                Create
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Login')}>
                <Text center color={theme.COLORS.ERROR} size={theme.SIZES.FONT * 0.75}>
                  Already have an account? Sign In
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    //onSignupUser: (authData) => dispatch(onSignupUser(userData))
     onSignupUser: () => dispatch(onSignupUser(userData))
   
  };
};

export default connect(null, mapDispatchToProps)(Structure);