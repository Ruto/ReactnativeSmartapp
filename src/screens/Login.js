import React from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform,
} from 'react-native';
import { connect } from 'react-redux'
// galio component
import { Block, Button, Input, NavBar, Text } from 'galio-framework';
import theme from '../constants/theme';
import { onLoginUser } from '../actions';
//import AuthLoading from '../navigation/AuthLoading';


const { height, width } = Dimensions.get('window');

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  /**
    switch (true) {
      case inputField.test(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/):
        return {
          authData = {
            email: this.state.inputField,
            password: this.state.password
    };
        }
        break;
      case inputField.test(phone number):
        display("• Matched 'test' test");
        break;

      default:
        display("• Didn't match any test");
        break;
    }
 */
  
  loginHandler = () => {
     authData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.onLoginUser(authData);
    //Alert.alert(JSON.stringify(this.props.user.loggedIn))
    // this.props.navigation.navigate('AuthLoading');
  };


  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    //const { email, password } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Sign In"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>

          <Block flex={2} center space="evenly">
            <Block flex={2}>
              <Input
                rounded
                type="email-address"
                placeholder="Username / Email / Phone"
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
              <Text
                color={theme.COLORS.ERROR}
                size={theme.SIZES.FONT * 0.75}
                onPress={() => Alert.alert('Not implemented')}
                style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
              >
                Forgot your password?
              </Text>
            </Block>
            <Block flex middle>
              <Button
                round
                color="primary"
                onPress={this.loginHandler}
               /**
                * onPress={() => Alert.alert(
                  'Sign in action',
                  `Email: ${email}
                   Password: ${password}`,
                )}
                *  */ 
              >
                Sign in
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Signup')}>
                <Text center color={theme.COLORS.FACEBOOK} size={theme.SIZES.FONT * 0.75}>
                  {"Don't have an account? Sign Up"}
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

//export default Login;
const mapDispatchToProps = dispatch => {
  return {
    onLoginUser: (authData) => dispatch(onLoginUser(authData))
    //onLoginUser: () => dispatch(onLoginUser(authData))
  };
};

export default connect(null, mapDispatchToProps)(Login);
