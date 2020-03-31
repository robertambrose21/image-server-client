import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Grid,
  GridList,
  GridListTile,
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core';

import img1 from '../assets/based.jpg';
import ImageList from './ImageList';

interface Tag {
  id: number;
  name: string;
  count: number;
}

interface Tags {
  tags: Tag[];
}

const styles = (theme: Theme) =>
  createStyles({
    gridList: {
      width: 500,
      height: 450
    }
  });

class App extends Component<WithStyles<typeof styles>, Tags> {
  constructor(styles: any, props: Tags) {
    super(styles, props);

    this.state = {
      tags: []
    };
  }

  componentDidMount() {
    const url = '/tags';

    fetch(url)
      .then(result => result.json())
      .then(result => this.setState({ tags: result }));
  }

  render() {
    const { tags } = this.state;

    return (
      <Container>
        <Typography variant="h2" align="center">
          Sler's Image Server
        </Typography>
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
                  {tags.map(t => (
                    <ListItem>
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
            <ImageList images={[{ imageSource: img1, imageAlt: 'img' }]} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(App);
