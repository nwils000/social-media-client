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
        width: '100%',
        bottom: '2rem',
      }}
    >
      <div>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
          />
        )}
        <div>
          <textarea
            style={{ width: '100%', resize: 'none' }}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Write a caption..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
