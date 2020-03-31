import React, { Component } from 'react';
import {
  Theme,
  createStyles,
  GridList,
  GridListTile,
  withStyles,
  WithStyles
} from '@material-ui/core';

import { Image } from '../types';

const styles = (theme: Theme) =>
  createStyles({
    gridList: {
      width: 500,
      height: 450
    }
  });

interface ImageListPropTypes {
  images: Image[];
}

class ImageList extends Component<
  ImageListPropTypes & WithStyles<typeof styles>
> {
  render() {
    const { images } = this.props;

    return (
      <GridList
        cellHeight={160}
        cols={3}
        className={this.props.classes.gridList}
      >
        {images.map(i => (
          <GridListTile key={i.imageSource}>
            <img src={i.imageSource} alt={i.imageAlt} />
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default withStyles(styles)(ImageList);
