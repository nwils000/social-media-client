import { useEffect, useState } from 'react';

export default function AddImage({
  display,
  imagePreview,
  flexDirection,
  setDescription,
  description,
}) {
  return (
    <div
      style={{
        height: '100%',
        display: display,
        flexDirection: flexDirection,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: '2rem',
      }}
    >
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Selected"
          style={{ maxWidth: '100%', maxHeight: '300px' }}
        />
      )}
      <div style={{ width: '20rem' }}>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Write a caption..."
        ></textarea>
      </div>
    </div>
  );
}
