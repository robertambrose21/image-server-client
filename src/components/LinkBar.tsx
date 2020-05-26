import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';

export default function LinkBar() {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item>
        <Typography>
          <Link href="/">Home</Link>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Link href="/addImage">Add Image</Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
