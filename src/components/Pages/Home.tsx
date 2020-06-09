import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  createStyles,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import ImageList from '../ImageList';
import { Tag } from '../../types';

const styles = (theme: Theme) =>
  createStyles({
    gridList: {
      width: 500,
      height: 450,
    },
  });

type HomeProps = WithStyles<typeof styles>;

function Home(props: HomeProps) {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const url = '/tags';

    fetch(url)
      .then((result) => result.json())
      .then((result) => setTags(result));
  }, []);

  return (
    // Tag component
    <Grid container spacing={2}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <form>
              <TextField id="tag-search" label="Search tags" />
            </form>
          </Grid>
          <Grid item>
            <List>
              {tags.map((t) => (
                <ListItem key={t.name}>
                  <ListItemText
                    primary={t.name}
                    secondary={`count ${t.count}`}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <ImageList imageSource="/images" />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);
