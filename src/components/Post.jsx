import { FaRegHeart } from 'react-icons/fa';

export default function Post() {
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
        style={{
          fontSize: '1rem',
          fontWeight: 'bold',
          fontSize: '1.2rem',
        }}
      >
        Nathan Wilson
      </h2>
      <div className="image-wrapper">
        <img
          src="https://images.pexels.com/photos/24252211/pexels-photo-24252211/free-photo-of-a-table-with-flowers-and-watercolor-paints.jpeg"
          alt=""
        />
      </div>
      <div className="interaction-bar">
        <FaRegHeart style={{ fontSize: '2rem' }} />
      </div>
      <div className="likes" style={{ fontSize: '1.3rem' }}>
        100 likes
      </div>
      <div className="comments" style={{ fontSize: '1.2rem' }}>
        <span style={{ fontWeight: 'bold' }}>Blair Wilson </span>
        <span>Beautiful picture ❤️</span>
      </div>
      <div className="add-a-comment">
        <input
          style={{ border: 0, background: 'transparent', fontSize: '1.2rem' }}
          type="text"
          placeholder="Add a comment..."
        />
      </div>
    </div>
  );
}
