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
import useWidth from '../hooks/useWidth';

const styles = () =>
  createStyles({
    gridList: {
      width: '100%',
      height: '100%',
    },
  });

type ImageListProps = {
  imageSource: string;
} & WithStyles<typeof styles>;

const numCols = {
  xl: 7,
  lg: 7,
  md: 5,
  sm: 3,
  xs: 2,
};

function ImageList(props: ImageListProps) {
  const [imageIds, setImageIds] = useState<Number[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentImageId, setCurrentImageId] = useState<Number>(0);

  useEffect(() => {
    fetch(props.imageSource)
      .then((result) => result.json())
      .then((result) => setImageIds(result));
  }, [props.imageSource]);

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
      <GridList
        cellHeight={160}
        cols={numCols[useWidth()]}
        className={props.classes.gridList}
      >
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
