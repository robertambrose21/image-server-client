import React, { Component } from 'react';
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

interface HomeProps {
  tags: Tag[];
}

class Home extends Component<WithStyles<typeof styles>, HomeProps> {
  constructor(styles: any, props: HomeProps) {
    super(styles, props);

    this.state = {
      tags: [],
    };
  }

  componentDidMount() {
    const url = '/tags';

    fetch(url)
      .then((result) => result.json())
      .then((result) => this.setState({ tags: result }));
  }

  render() {
    const { tags } = this.state;

    return (
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
          <ImageList imageSource="/images" />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
