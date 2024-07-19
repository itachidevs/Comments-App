import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommnetItem = props => {
  const {commnetDetails, updateLike, deleteComment} = props
  const {name, comment, id, date, isLiked, initialClassName} = commnetDetails
  // console.log(formatDistanceToNow(date))
  const firstLetter = name[0].toUpperCase()
  const likedImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const likeImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const thumpsup = isLiked ? likedImage : likeImage
  const buttonClassName = isLiked ? 'liked' : 'like'
  const onLike = () => {
    updateLike(id)
  }
  const ondeleting = () => {
    deleteComment(id)
  }
  const time = formatDistanceToNow(date)
  return (
    <li className="comment-item-container">
      <div className="top-container">
        <div className={initialClassName}>{firstLetter}</div>
        <div className="commnet-details-container">
          <div className="profile-details">
            <h1 className="profile-name">{name}</h1>
            <p className="time">{time}</p>
          </div>
          <div className="comment-description">
            <p className="description">{comment}</p>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <button type="button" className={buttonClassName} onClick={onLike}>
          <img src={thumpsup} alt="like" /> Like
        </button>
        <button
          className="delete-container"
          type="button"
          onClick={ondeleting}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default CommnetItem
