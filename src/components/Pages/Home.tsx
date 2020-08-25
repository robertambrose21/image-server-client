import React, { useState, useEffect } from 'react';
import { Grid, createStyles, WithStyles, withStyles } from '@material-ui/core';
import ImageList from '../ImageList';
import { Tag } from '../../types';
import SearchTags from '../SearchTags';

const styles = () =>
  createStyles({
    gridList: {
      width: 500,
      height: 450,
    },
  });

type HomeProps = WithStyles<typeof styles>;

function Home() {
  const [, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const url = '/tags';

    fetch(url)
      .then((result) => result.json())
      .then((result) => setTags(result));
  }, []);

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <SearchTags />
      </Grid>
      <Grid item>
        <ImageList imageSource="/images" />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);
