import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { ImagePreview, UploadWrapper, UploadIcon } from './FileUpload.styles';

import Spinner from '../../Spinner/Spinner';

const FileUpload = ({ handleUpload }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = async uploadedFiles => {
    setUploading(true);

    let formData = new FormData();
    const config = { header: { 'content-type': 'multipart/form-data' } };

    formData.append('file', uploadedFiles[0]);

    try {
      const res = await axios.post('/api/hotels/uploadimage', formData, config);
      setFiles([...files, res.data]);
      setUploading(false);

      handleUpload([...files, res.data]);
    } catch (err) {
      console.log(err);
    };
  };

  const onRemove = async id => {
    await axios.get(`/api/hotels/removeimage?public_id=${id}`);
    let images = files.filter(item => item.public_id !== id);

    setFiles(images);
    handleUpload(images);
  };

  const showUploadedImages = () => (
    files.map(item => (
      <ImagePreview
        url={item.url}
        key={item.public_id}
        onClick={() => onRemove(item.public_id)}
      >
      </ImagePreview>
    ))
  );

  return (
    <UploadWrapper>
      <Dropzone
        onDrop={onDrop}
        multiple={false}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Add image</p>
            <UploadIcon className="fas fa-plus-circle"></UploadIcon>
          </div>
        )}
      </Dropzone>
      {showUploadedImages()}
      {uploading ?
        <Spinner />
        : null}
    </UploadWrapper>
  );
};

FileUpload.propTypes = {
  handleUpload: PropTypes.func.isRequired
};

export default FileUpload;