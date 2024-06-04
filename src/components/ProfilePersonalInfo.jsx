export default function ProfilePersonalInfo() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        right: '9rem',
        gap: '5rem',
        alignItems: 'center',
        marginBottom: '4rem',
      }}
    >
      <img
        src="https://images.pexels.com/photos/24252211/pexels-photo-24252211/free-photo-of-a-table-with-flowers-and-watercolor-paints.jpeg"
        alt=""
        style={{ width: '10rem', height: '10rem', borderRadius: '100%' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <h2
            style={{
              fontSize: '1.4rem',
              fontWeight: 'normal',
            }}
          >
            nathan_wilsonn
          </h2>
          <button
            style={{
              border: 'none',
              padding: '8px 16px',
              backgroundColor: 'rgb(227, 227, 227)',
              fontWeight: '500',
              borderRadius: '10px',
              fontSize: '.9rem',
            }}
          >
            Edit profile
          </button>
          <button
            style={{
              border: 'none',
              padding: '8px 16px',
              backgroundColor: 'rgb(227, 227, 227)',
              fontWeight: '500',
              borderRadius: '10px',
              fontSize: '.9rem',
            }}
          >
            Log out
          </button>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>
            <span style={{ fontWeight: 'bold' }}>126 </span>
            <span>posts</span>
          </span>
          <span>
            <span style={{ fontWeight: 'bold' }}>2,552 </span>
            <span>followers</span>
          </span>
          <span>
            <span style={{ fontWeight: 'bold' }}>415 </span>
            <span>following</span>
          </span>
        </div>
        <div>
          <p style={{ fontWeight: 'bold', marginBottom: 0 }}>Nathan Wilson</p>
          <p>Blair & Blake 🤍🤍</p>
        </div>
      </div>
    </div>
  );
}
