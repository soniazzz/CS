import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid
} from '@mui/material'

export default function LearningIntroArticle(props) {
  const { head, brief, img, link } = props;
  return (
      <Grid item xs={12}>
        <CardActionArea>
          <Card sx={{ display: 'flex', height: 250 }}>
            <CardMedia
              component='img'
              sx={{
                width: 250,
                height: 250,
                textAlign: 'left',
                display: { xs: 'none', sm: 'block' },
              }}
              image={img}
              alt={head}
            />
            <CardContent sx={{ flex: 1, textAlign: 'left' }}>
              <Typography component='a' variant='h5' href={link}>{head}</Typography>
              <Typography variant='subtitle1' paragraph>{brief}</Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
  )
}