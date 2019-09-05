import React from 'react';
import './App.css';
import CommentBox from './CommentBox';
import Comments from './Comments';


// Weekly Challenge in React
// Create a way to collect user comments and then delete them
// Create a thumbs up / thumbs down counter for these comments
// Create a way to write responses to the original comment
// Create a thumbs up / thumbs down counter for these comments and ability to delete

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    const channel = Ably.channels.get('comments');

    channel.attach();
      channel.once('attached', () => {
        channel.history((err,page) => {
          const comments = Array.from(page.items, items => items.date);

          this.setState({ comments});

          channel.subscribe((msg, err) => {
            const commentObject = msg['data'];
            this.handleAddComment(commentObject);
          })
        })
      })
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: [comment].concat(prevState.comments)
      }
    })
  }

  render() {
    return (
     <section className="section">
       <div className="columns">
         <div className="column is-half is-offset-one-quarter">
           <CommentBox />
           <Comments comments={this.state.comments} />
         </div>
       </div>
     </section>
    );
  }
}

export default App;
