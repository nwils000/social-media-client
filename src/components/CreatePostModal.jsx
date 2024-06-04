import { RxCross2 } from 'react-icons/rx';
import { useContext, useState } from 'react';
import { CreatePostContext } from '../context';

export default function CreatePostModal() {
  const { modalDisplay, setModalDisplay } = useContext(CreatePostContext);

  return (
    <div>
      <div
        className="create-post-modal"
        style={{
          display: modalDisplay,
          height: '100vh',
          width: '100vw',
          margin: 'auto',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 3,
        }}
        onClick={() => {
          modalDisplay === 'none'
            ? setModalDisplay('block')
            : setModalDisplay('none');
        }}
      >
        <RxCross2
          className="cross"
          style={{
            color: 'white',
            fontSize: '2rem',
            position: 'absolute',
            right: '2rem',
            top: '1rem',
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: 'white',
          display: modalDisplay,
          width: '32rem',
          height: '34.6rem',
          margin: 'auto',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 4,
          borderRadius: 12,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '500',
            borderBottom: '1px solid rgb(227, 227, 227)',
          }}
        >
          <p style={{ marginBottom: 0, padding: '.52rem' }}>Create new post</p>
        </div>
      </div>
    </div>
  );
}
