import React from 'react';
import { 
  ActivityIndicator,
  StatusBar,
  View,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import jwt from 'jwt-decode';
import { expiredToken } from '../actions';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = () => {
   // check if there is a token on asynstorage and the token has not yet expired
   // jwt decription the expiry of the token
   // await AsyncStorage.setItem('userLoggedin', 'false')
   // const userToken = AsyncStorage.getItem('userLoggedin') 
   // this.props.navigation.navigate(userToken === 'true' ? 'App' : 'Auth');

    if (this.props.user.user !== null) {
      let token = this.props.user.token
      let currentTime = Date.now()/1000 
      const expiryTime = jwt(token).exp
        if (expiryTime < currentTime) {
          this.props.expiredToken(this.props.user)
        }
    } 
      const islogged = JSON.stringify(this.props.user.loggedIn)
      this.props.navigation.navigate(islogged !== true ? 'App' : 'Auth');
    
    //const userToken = await AsyncStorage.getItem('userLoggedin');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    Alert.alert(JSON.stringify(this.props.user.loggedIn))
    
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    expiredToken: (user) => dispatch(expiredToken(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);

