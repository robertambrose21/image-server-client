import React, { Component } from 'react';
import {
  Button,
  Theme,
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
import { addImage } from '../../actions';

const styles = (theme: Theme) =>
  createStyles({
    input: {
      display: 'none',
    },
  });

const mapDispatchToProps = {
  addImage: addImage,
};

const connector = connect(null, mapDispatchToProps);

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

    var c = this.fileInput.current;
    if (c && c.files) {
      this.props.addImage({ data: c.files[0], url: c.files[0].name });
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
        </form>
      </>
    );
  }
}

export default withStyles(styles)(connector(AddImage));
