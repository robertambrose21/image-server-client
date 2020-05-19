import React, { Component } from 'react';
import {
  Button,
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Typography,
} from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
import { addImage } from '../../actions';
import { RootState } from '../../reducers';
import { ImageUploadOptions } from '../../types';
import { Dispatch } from 'redux';
import { ImageActions, IMAGE_SELECTED } from '../../constants/action-types';

const styles = (theme: Theme) =>
  createStyles({
    input: {
      display: 'none',
    },
  });

const mapStateToProps = (state: RootState) => ({
  uploadState: state.imageReducer.uploadState,
  url: state.imageReducer.url,
});

const mapDispatchToProps = {
  addImage: addImage,
  selectFile: (url: string) => (dispatch: Dispatch<ImageActions>) => {
    dispatch({ type: IMAGE_SELECTED, url: url });
  },
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type AddImageProps = ConnectedProps<typeof connector> &
  WithStyles<typeof styles>;

class AddImage extends Component<AddImageProps> {
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: AddImageProps) {
    super(props);
    this.fileInput = React.createRef();
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.addImage(this.fileInput.current);
  };

  getCurrentFilename = () => {
    const currentFileInput = this.fileInput.current;

    if (currentFileInput === null || !currentFileInput.files) {
      return undefined;
    }

    return currentFileInput.files[0].name;
  };

  getStatusText = () => {
    const url = this.getCurrentFilename();

    switch (this.props.uploadState) {
      case ImageUploadOptions.SELECTED:
        return `Image ${url} ready for upload.`;

      case ImageUploadOptions.UPLOADING:
        return `Uploading ${url}...`;

      case ImageUploadOptions.UPLOADED:
        return `Uploaded ${url}!`;

      case ImageUploadOptions.NONE:
      default:
        return '';
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            id="add-image-button"
            accept="image/*"
            type="file"
            ref={this.fileInput}
            className={this.props.classes.input}
            onChange={(event: React.ChangeEvent) => {
              console.log(this.getCurrentFilename());
              this.props.selectFile(this.getCurrentFilename()!!);
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
            className={this.props.classes.input}
          />
          <label htmlFor="submit-button">
            <Button variant="contained" color="primary" component="span">
              Submit
            </Button>
          </label>
          <Typography>{this.getStatusText()}</Typography>
        </form>
      </>
    );
  }
}

export default withStyles(styles)(connector(AddImage));
