import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Title from "./components/Title";
import "./App.css";

class App extends Component { 
  state = {
    friends: friends,
    toggle: false
  }
  removeFriend = id => {
    console.log(id)
    const newfriends = this.state.friends.filter(friend => friend.id !== id)
    this.setState({friends: newfriends})
  }
  render() {  
      return (
        <Wrapper>
          <Title>HEY THIS IS SO COOL </Title>      
          {this.state.friends.map(friend => (
            <FriendCard
              removefriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              occupation={friend.occupation}
              location={friend.location}
              image={friend.image} />
          ) )}
          
        </Wrapper>      
  );
 }
}

export default App;