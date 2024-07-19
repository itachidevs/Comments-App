import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  updateLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          console.log(1)
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const index = commentList.indexOf(each => each.id === id)
    commentList.pop(index)
    const newList = commentList
    this.setState({commentList: newList})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `comment-profile ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentList} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">Comments</h1>
        <div className="input-part">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="image"
            alt="comments"
          />
          <div className="form-container">
            <p className="instruction">Say something about 4.0 technologies</p>

            <form className="form" onSubmit={this.onAddComment}>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
                required
              />
              <textarea
                type="text"
                placeholder="Your Comment"
                cols="30"
                rows="5"
                className="comment"
                value={comment}
                onChange={this.onChangeComment}
                required
              />
              <button className="add-comment-button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <div className="comments-container">
          <p className="commenets-count">
            <span className="count">{commentList.length}</span>Commnets
          </p>
          <ul>
            {commentList.map(eachCommnet => (
              <CommentItem
                color={initialContainerBackgroundClassNames}
                commnetDetails={eachCommnet}
                key={eachCommnet.id}
                updateLike={this.updateLike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
