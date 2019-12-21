import React from 'react';
import {
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// galio component
import { Block, Button, Input, Text, NavBar } from 'galio-framework';
import { onSignupUser } from '../actions/AuthActions';
import { connect } from 'react-redux';

import theme from '../constants/theme';

const { height, width } = Dimensions.get('window');

class Signup extends React.Component {
  state = {
    username: '-',
    email: '-',
    password: '-',
  }

  signupHandler = () => {
    userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };
    this.props.onSignupUser(userData);
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
                placeholder="Username"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('username', text)}
              />
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('email', text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Confirm Password"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password_confirmation', text)}
              />
            </Block>
            <Block flex middle>
              <Button
                round
                color="error"
                onPress={this.signupHandler}
              >
                Sign up
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

export default connect(null, mapDispatchToProps)(Signup);