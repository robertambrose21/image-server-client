import React, { useState, useEffect } from 'react';
import {
  Theme,
  createStyles,
  GridList,
  GridListTile,
  withStyles,
  WithStyles,
} from '@material-ui/core';

const styles = (theme: Theme) =>
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

  useEffect(() => {
    fetch(props.imageSource)
      .then((result) => result.json())
      .then((result) => setImageIds(result));
  }, [imageIds, props.imageSource]);

  return (
    // TODO: Flexible columns
    <GridList cellHeight={160} cols={3} className={props.classes.gridList}>
      {imageIds.map((i) => (
        <GridListTile key={`${i}`}>
          <img src={`/images/${i}`} alt={`${i}`} />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default withStyles(styles)(ImageList);
