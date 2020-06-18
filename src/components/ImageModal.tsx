import React, { useEffect, useState } from 'react';
import {
  Modal,
  Box,
  createStyles,
  WithStyles,
  withStyles,
  Link,
  CardMedia,
  Card,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = () =>
  createStyles({
    fullHeight: {
      height: '90vh',
    },
    button: {
      height: '0%',
    },
    boxHeight: {
      height: '100%',
    },
  });

type ImadeModalProps = {
  imageId: Number;
  open: boolean;
  onClose: Function;
} & WithStyles<typeof styles>;

function ImageModal(props: ImadeModalProps) {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    fetch(`/images/${props.imageId}/`)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        setImageUrl(
          URL.createObjectURL(
            new File([blob], 'imagething.png', { type: 'image/png' })
          )
        );
      });
  }, [props.imageId]);

  return (
    <Modal open={props.open} onClose={() => props.onClose()}>
      <Box>
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
          className={props.classes.boxHeight}
        >
          <Card>
            <CardMedia
              image={imageUrl}
              component="img"
              className={props.classes.fullHeight}
            />
          </Card>
        </Box>
      </Box>
    </Modal>
  );
}

export default withStyles(styles)(ImageModal);
