import React from 'react'
import { View, Text, Button } from 'react-native'
import jwt from 'jwt-decode'
import { connect } from 'react-redux'

class DetailsScreen extends React.Component {

  logoutHandler = async () => {
   this.props.onLogoutUser(user)
   this.props.navigation.navigate('AuthLoading');
 };
 

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.navigate('HomeScreen') 
          }}
        />
        
        <Button
          onPress={this.logoutHandler}
          title="Logout"       
        />
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
    onLogoutUser: (user) => dispatch(onLogoutUser(user))
  };
};

export default connect(null, mapDispatchToProps)(DetailsScreen);