import React, { Component } from 'react';
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

interface ImageListProps {
  imageSource: string;
}

interface ImageListState {
  imageIds: Number[];
}

// TODO: Redux actions
class ImageList extends Component<
  ImageListProps & WithStyles<typeof styles>,
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
      // TODO: Flexible columns
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
