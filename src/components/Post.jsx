import { FaRegHeart } from 'react-icons/fa';
import { addCommentToPost, addLikeToPost, getProfileToSee } from '../api';
import { useContext, useState } from 'react';
import { ProfileContext } from '../context';
import { useNavigate } from 'react-router-dom';

export default function Post({ post }) {
  const { profile } = useContext(ProfileContext);
  const [comment, setComment] = useState('');

  const navigate = useNavigate();

  let postId = post.id;
  let profileId = post.profile.id;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '.4rem',
        width: '28rem',
        marginBottom: '4rem',
      }}
    >
      <h2
        className="hover"
        style={{
          fontWeight: 'bold',
          fontSize: '1.2rem',
        }}
        onClick={() => {
          const fetchProfileImSeeing = async () => {
            try {
              const theProfile = await getProfileToSee({ profile, profileId });
              profile.dispatch({
                type: 'SET_PROFILE_IM_SEEING',
                theProfile: theProfile,
              });
              navigate('/profile');

              console.log('PrOFILe To SeE', theProfile);
            } catch (error) {
              console.log('Error:', error);
            }
          };
          fetchProfileImSeeing();
        }}
      >
        @{post.profile.user.username}
      </h2>

      <div className="image-wrapper">
        <img src={`https://app-social-media.fly.dev${post.image}`} alt="" />
      </div>
      <div>
        <span style={{ fontSize: '1.4rem' }}>{post.description}</span>
      </div>
      <div
        className="interaction-bar"
        onClick={() => {
          addLikeToPost({ profile, postId });
        }}
      >
        <FaRegHeart className="hover" style={{ fontSize: '2rem' }} />
      </div>
      <div className="likes" style={{ fontSize: '1.3rem' }}>
        {post.likes.length}
      </div>
      {post.comments.map((comment) => {
        return (
          <div className="comments hover" style={{ fontSize: '1.2rem' }}>
            <span
              onClick={() => {
                console.log('HSFIAHASFIFSA', comment);
                const fetchProfileImClicking = async () => {
                  try {
                    const theProfile = await getProfileToSee({
                      profile,
                      profileId: comment.profile.id,
                    });
                    profile.dispatch({
                      type: 'SET_PROFILE_IM_SEEING',
                      theProfile: theProfile,
                    });
                    navigate('/profile');

                    console.log('PrOFILe To SeE', theProfile);
                  } catch (error) {
                    console.log('Error:', error);
                  }
                };
                fetchProfileImClicking();
              }}
              style={{ fontWeight: 'bold' }}
            >
              @{comment.profile.user.username}{' '}
            </span>
            <span>{comment.text}</span>
          </div>
        );
      })}
      <div
        className="add-a-comment"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <input
          style={{ border: 0, background: 'transparent', fontSize: '1.2rem' }}
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(24, 119, 242, 255)',

            zIndex: 3,
          }}
          onClick={() => {
            addCommentToPost({ profile, postId, comment });
            finishPostDisplay === 'none' && setFinishPostDisplay('flex');
            setFlexDirection('row');
            setModalDisplay('none');
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}
