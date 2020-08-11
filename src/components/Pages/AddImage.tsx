import React from 'react';
import {
  Button,
  createStyles,
  WithStyles,
  withStyles,
  Typography,
} from '@material-ui/core';
import { postImage } from '../../actions/imageActions';
import { ImageUploadOptions } from '../../types';
import { IMAGE_SELECTED, IMAGE_SUBMITTING } from '../../constants/action-types';
import { imageReducer } from '../../reducers/imageReducer';
import useReducerWithThunk from '../../hooks/useReducerWithThunk';
import ImageUploadDropzone from '../ImageUploadDropzone';

const styles = () =>
  createStyles({
    input: {
      display: 'none',
    },
  });

type AddImageProps = WithStyles<typeof styles>;

function AddImage(props: AddImageProps) {
  const [state, dispatch] = useReducerWithThunk(imageReducer, {
    uploadState: ImageUploadOptions.NONE,
    url: undefined,
  });

  const fileInput: React.RefObject<HTMLInputElement> = React.createRef();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const currentFileInput = fileInput.current;

    if (currentFileInput === null || !currentFileInput.files) {
      return;
    }

    // TODO: Handle multiple files
    const image = {
      data: currentFileInput.files[0],
      url: currentFileInput.files[0].name,
    };

    dispatch({
      type: IMAGE_SUBMITTING,
      url: image.url,
    });

    const data = new FormData();
    data.append('data', image.data);

    dispatch(postImage(data));
  }

  function getCurrentFilename() {
    const currentFileInput = fileInput.current;

    if (currentFileInput === null || !currentFileInput.files) {
      return undefined;
    }

    return currentFileInput.files[0].name;
  }

  function getStatusText() {
    switch (state.uploadState) {
      case ImageUploadOptions.SELECTED:
        return `Image ${state.url} ready for upload.`;

      case ImageUploadOptions.UPLOADING:
        return `Uploading ${state.url}...`;

      case ImageUploadOptions.UPLOADED:
        return `Uploaded ${state.url}!`;

      case ImageUploadOptions.NONE:
      default:
        return '';
    }
  }

  // TODO: Dropzone
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="add-image-button"
          accept="image/*"
          type="file"
          ref={fileInput}
          className={props.classes.input}
          onChange={(_event: React.ChangeEvent) => {
            dispatch({ type: IMAGE_SELECTED, url: getCurrentFilename()!! });
          }}
        />
        <label htmlFor="add-image-button">
          <Button variant="contained" color="primary" component="span">
            Add Image
          </Button>
        </label>
        <input
          id="submit-button"
          type="submit"
          className={props.classes.input}
        />
        <label htmlFor="submit-button">
          <Button variant="contained" color="primary" component="span">
            Submit
          </Button>
        </label>
        <Typography>{getStatusText()}</Typography>
      </form>
      <ImageUploadDropzone />
    </>
  );
}

export default withStyles(styles)(AddImage);
