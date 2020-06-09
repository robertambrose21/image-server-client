import React from 'react';
import {
  Modal,
  Box,
  createStyles,
  WithStyles,
  withStyles,
  Link,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = () =>
  createStyles({
    fullHeight: {
      height: '100%',
    },
    button: {
      height: '0%',
    },
  });

type ImadeModalProps = {
  imageId: Number;
  open: boolean;
  onClose: Function;
} & WithStyles<typeof styles>;

function ImageModal(props: ImadeModalProps) {
  return (
    <Modal open={props.open} onClose={() => props.onClose()}>
      <Box className={props.classes.fullHeight}>
        <Box
          display="flex"
          justifyContent="right"
          p={1}
          className={props.classes.button}
        >
          <Link href="#" onClick={() => props.onClose()}>
            <CloseIcon fontSize="large" color="action" />
          </Link>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={props.classes.fullHeight}
        >
          <img src={`/images/${props.imageId}/`} alt={`${props.imageId}`} />
        </Box>
      </Box>
    </Modal>
  );
}

export default withStyles(styles)(ImageModal);
