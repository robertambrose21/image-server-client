import React, { useState, useEffect } from 'react';
import {
  Theme,
  createStyles,
  GridList,
  GridListTile,
  withStyles,
  WithStyles,
  Modal,
  Link,
  Box,
} from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    gridList: {
      width: 500,
      height: 450,
    },
    image: {
      height: '100%',
    },
  });

type ImageListProps = {
  imageSource: string;
} & WithStyles<typeof styles>;

function ImageList(props: ImageListProps) {
  const [imageIds, setImageIds] = useState<Number[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentImageId, setCurrentImageId] = useState<Number>(0);

  useEffect(() => {
    fetch(props.imageSource)
      .then((result) => result.json())
      .then((result) => setImageIds(result));
  }, [imageIds, props.imageSource]);

  const handleModalOpen = (imageId: Number) => {
    setCurrentImageId(imageId);
    setModalOpen(true);
  };

  return (
    <>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={props.classes.image}
        >
          <img src={`/images/${currentImageId}/`} alt={`${currentImageId}`} />
        </Box>
      </Modal>
      <GridList cellHeight={160} cols={3} className={props.classes.gridList}>
        {imageIds.map((i) => (
          <GridListTile key={`${i}`}>
            <Link href="#" onClick={() => handleModalOpen(i)}>
              <img src={`/images/${i}/thumb`} alt={`${i}`} />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </>
  );
}

export default withStyles(styles)(ImageList);
