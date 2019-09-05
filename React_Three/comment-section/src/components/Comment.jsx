import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Avatar" />
                    </p>
                </figure>
                <div className="media-content">
                    <p>
                        <strong>{this.props.comment.name}</strong>
                        <br />
                        {this.props.comment.comment}
                    </p>
                </div>
            </article>
        )
    }
}
export default Comment;