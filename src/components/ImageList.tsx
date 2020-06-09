import React, { useState, useEffect } from 'react';
import {
  createStyles,
  GridList,
  GridListTile,
  withStyles,
  WithStyles,
  Link,
} from '@material-ui/core';
import ImageModal from './ImageModal';

const styles = () =>
  createStyles({
    gridList: {
      width: 500,
      height: 450,
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
      <ImageModal
        open={modalOpen}
        imageId={currentImageId}
        onClose={() => setModalOpen(false)}
      />
      {/* TODO: Flexible columns based on screen width */}
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
