import React, { Component } from 'react';
import {
  Theme,
  createStyles,
  GridList,
  GridListTile,
  withStyles,
  WithStyles,
} from '@material-ui/core';

import { Image } from '../types';

const styles = (theme: Theme) =>
  createStyles({
    gridList: {
      width: 500,
      height: 450,
    },
  });

interface ImageListPropTypes {
  imageSource: string;
}

type ImageListState = {
  imageIds: Number[];
};

class ImageList extends Component<
  ImageListPropTypes & WithStyles<typeof styles>,
  ImageListState
> {
  componentWillMount() {
    this.setState({ imageIds: [] });
  }

  componentDidMount() {
    fetch(this.props.imageSource)
      .then((result) => result.json())
      .then((result) => {
        this.setState({ imageIds: result });
      });
  }

  render() {
    return (
      <GridList
        cellHeight={160}
        cols={3}
        className={this.props.classes.gridList}
      >
        {this.state.imageIds.map((i) => (
          <GridListTile key={`${i}`}>
            <img src={`/images/${i}`} alt={`${i}`} />
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default withStyles(styles)(ImageList);