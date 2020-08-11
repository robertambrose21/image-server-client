import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  RootRef,
  Paper,
  Typography,
  createStyles,
  withStyles,
  WithStyles,
  Grid,
  SvgIconProps,
} from '@material-ui/core';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import { ImageUploadOptions } from '../types';

const styles = () =>
  createStyles({
    icon: {
      width: 300,
      height: 300,
    },
  });

type ImageUploadDropzoneProps = WithStyles<typeof styles>;

function ImageUploadDropzone(props: ImageUploadDropzoneProps) {
  const [status, setStatus] = useState<ImageUploadOptions>(
    ImageUploadOptions.NONE
  );

  const onDrop = useCallback((acceptedFiles) => {
    setStatus(ImageUploadOptions.UPLOADING);

    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const { ref, ...rootProps } = getRootProps();

  function getStatusText(status: ImageUploadOptions) {
    switch (status) {
      case ImageUploadOptions.NONE:
        return '';
      case ImageUploadOptions.SELECTED:
        return ''; // TODO: Remove this - will no longer be relevant
      case ImageUploadOptions.UPLOADING:
        return <Typography>Uploading...</Typography>;
      case ImageUploadOptions.UPLOADED:
        return <Typography>Uploaded!</Typography>;
    }
  }

  function getIconColor() {
    if (status === ImageUploadOptions.UPLOADING) {
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
          <Grid item>{getStatusText(status)}</Grid>
        </Grid>
      </Paper>
    </RootRef>
  );
}

export default withStyles(styles)(ImageUploadDropzone);
