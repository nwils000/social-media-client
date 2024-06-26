import { RxCross2 } from 'react-icons/rx';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { ProfileContext, CreatePostContext } from '../context';
import AddImage from './AddImage';
import FinishPost from './FinishPost';
import { createPost } from '../api';

export default function CreatePostModal() {
  const { modalDisplay, setModalDisplay } = useContext(CreatePostContext);
  const [addImageDisplay, setAddImageDisplay] = useState('flex');
  const [finishPostDisplay, setFinishPostDisplay] = useState('none');
  const [imagePreview, setImagePreview] = useState();
  const [image, setImage] = useState();
  const [flexDirection, setFlexDirection] = useState('column');
  const [description, setDescription] = useState('');
  const { profile } = useContext(ProfileContext);

  const handleShare = async () => {
    try {
      createPost({ profile, description, image });
    } catch (error) {}
  };

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
          {addImageDisplay === 'none' && (
            <button
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.6rem',
                color: 'black',
                position: 'absolute',
                left: '20px',
                top: 8,
                zIndex: 3,
              }}
              onClick={() => {
                finishPostDisplay && setFinishPostDisplay('none');
                addImageDisplay === 'none' && setAddImageDisplay('flex');
                setFlexDirection('column');
              }}
            >
              <IoArrowBackSharp />
            </button>
          )}
          <p style={{ marginBottom: 0, padding: '.52rem' }}>Create new post</p>
          {finishPostDisplay === 'none' && imagePreview ? (
            <button
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(24, 119, 242, 255)',
                position: 'absolute',
                right: '20px',
                zIndex: 3,
              }}
              onClick={() => {
                addImageDisplay && setAddImageDisplay('none');
                finishPostDisplay === 'none' && setFinishPostDisplay('flex');
                setFlexDirection('row');
              }}
            >
              Next
            </button>
          ) : (
            <div></div>
          )}
          {finishPostDisplay === 'flex' && (
            <button
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(24, 119, 242, 255)',
                position: 'absolute',
                right: '20px',
                zIndex: 3,
              }}
              onClick={() => {
                handleShare();
                addImageDisplay && setAddImageDisplay('none');
                finishPostDisplay === 'none' && setFinishPostDisplay('flex');
                setFlexDirection('row');
                setModalDisplay('none');
              }}
            >
              Share
            </button>
          )}
        </div>
        <AddImage
          display={addImageDisplay}
          image={image}
          setImage={setImage}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          flexDirection={flexDirection}
        />
        <FinishPost
          display={finishPostDisplay}
          imagePreview={imagePreview}
          image={image}
          description={description}
          setDescription={setDescription}
        />
      </div>
    </div>
  );
}
