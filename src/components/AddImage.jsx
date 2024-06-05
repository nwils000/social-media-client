import { useEffect, useState } from 'react';

export default function AddImage({
  display,
  imagePreview,
  setImagePreview,
  image,
  setImage,
}) {
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      console.log(imageUrl);
    }
  };

  return (
    <div
      style={{
        height: '100%',
        display: display,
        flexDirection: 'column',
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
      <label htmlFor="file" className="file-label">
        Select an image
      </label>
      <input
        id="file"
        type="file"
        accept="image/*"
        onChange={(e) => {
          setImage(e.target.files[0]);
          handlePreviewImage(e);
        }}
        style={{ display: 'none' }}
      />
    </div>
  );
}
