import React, { Component } from 'react';
import {
  Button,
  Theme,
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
import { ADD_IMAGE } from '../../constants/action-types';
import { AddImageState } from '../../types';

const styles = (theme: Theme) =>
  createStyles({
    input: {
      display: 'none',
    },
  });

const mapStateToProps = (state: AddImageState) => ({
  imageUrl: state.imageUrl,
});

const mapDispatchToProps = {
  addImage: (url: string) => ({
    type: ADD_IMAGE,
    payload: { imageUrl: url },
  }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// TODO: Refer to https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag for file handling
class AddImage extends Component<
  ConnectedProps<typeof connector> & WithStyles<typeof styles>
> {
  handleSubmit = (event: React.MouseEvent) => {
    this.props.addImage('Test Image URL');
  };

  render() {
    return (
      <>
        <input
          id="add-image-button"
          accept="image/*"
          type="file"
          multiple
          className={this.props.classes.input}
        />
        <label htmlFor="add-image-button">
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={this.handleSubmit}
          >
            Add Image
          </Button>
        </label>
      </>
    );
  }
}

export default withStyles(styles)(connector(AddImage));
