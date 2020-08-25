import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  RootRef,
  Paper,
  Typography,
  createStyles,
  withStyles,
  WithStyles,
  Grid,
} from '@material-ui/core';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import { ImageUploadOptions } from '../types';
import useReducerWithThunk from '../hooks/useReducerWithThunk';
import { imageReducer } from '../reducers/imageReducer';
import { IMAGE_SUBMITTING } from '../constants/action-types';
import { postImage } from '../actions/imageActions';

const styles = () =>
  createStyles({
    icon: {
      width: 300,
      height: 300,
    },
  });

type ImageUploadDropzoneProps = WithStyles<typeof styles>;

function ImageUploadDropzone(props: ImageUploadDropzoneProps) {
  const [state, dispatch] = useReducerWithThunk(imageReducer, {
    uploadStatus: ImageUploadOptions.NONE,
    url: undefined,
  });

  const onDrop = useCallback(
    (acceptedFiles) => {
      // TODO: Handle multiple files - see postImages action type
      const image = {
        data: acceptedFiles[0],
        url: acceptedFiles[0].name,
      };

      dispatch({
        type: IMAGE_SUBMITTING,
        url: image.url,
      });

      const data = new FormData();
      data.append('data', image.data);

      dispatch(postImage(data));
      console.log(acceptedFiles);
    },
    [dispatch]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const { ref, ...rootProps } = getRootProps();

  function getStatusText() {
    switch (state.uploadStatus) {
      case ImageUploadOptions.UPLOADING:
        return <Typography>Uploading...</Typography>;
      case ImageUploadOptions.UPLOADED:
        return <Typography>Uploaded!</Typography>;
      case ImageUploadOptions.NONE:
      default:
        return '';
    }
  }

  function getIconColor() {
    if (state.uploadStatus === ImageUploadOptions.UPLOADING) {
      return 'disabled';
    }

    return isDragActive ? 'primary' : 'inherit';
  }

  return (
    <RootRef rootRef={ref}>
      <Paper {...rootProps}>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <input {...getInputProps()} />
            <CloudUploadOutlinedIcon
              className={props.classes.icon}
              color={getIconColor()}
            />
          </Grid>
          <Grid item>{getStatusText()}</Grid>
        </Grid>
      </Paper>
    </RootRef>
  );
}

export default withStyles(styles)(ImageUploadDropzone);
