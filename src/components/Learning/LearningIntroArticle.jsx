import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid
} from '@mui/material'



export function LearningIntroArticle(props) {
  const { type, head, brief, img, link } = props;
  let bias_name = '';

  if (type === 1) {
    bias_name = 'Gender Bias';
  } else if (type === 2) {
    bias_name = 'Racial Bias';
  } else if (type === 3) {
    bias_name = 'Age Bias';
  } else if (type === 3) {
    bias_name = 'Height Bias';
  } else {
    bias_name = 'Affinity Bias';
  }

  return (
    <>
      <Grid item xs={12} md={6} mb={3} mt={3}>
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
              <Typography
                component='a'
                variant='h5'
                href={link}
              >
                {head}
              </Typography>

              <Typography
                variant='subtitle1'
                paragraph
              >
                {brief}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  )
}
/*
export function LearningIntroArticle(props) {
  const { type, head, brief, img, link } = props
  let bias_name=''
  if (type === 1) {
    bias_name = 'Gender Bias'
  } else if (type === 2) {
    bias_name = 'Racial Bias'
  } else if (type === 3) {
    bias_name = 'Age Bias'
  } else if (type === 3) {
    bias_name = 'Height Bias'
  }else{
    bias_name = 'Affinity Bias'
  }
  return (
    <>
      <link
        href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css'
        rel='stylesheet'
        id='bootstrap-css'
      />
 
      <div className='container'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <div className='media-left'>
              {'Recommended Materials For ' + bias_name}
            </div>
          </div>
          <div className='panel-body'>
            <div className='media'>
              <div className='media-left'>
                <a href={link}>
                  <img
                    className='media-object'
                    src={img}
                    alt='img'
                    width={300}
                  />
                </a>
              </div>
              <div className='media-body'>
                <a href={link}>
                  <h4 className='media-heading' style={{ textAlign: 'left' }}>
                    {head}
                  </h4>
                </a>
                
                <h5 className='media-body' style={{ textAlign: 'left' }}>
                  {brief}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
*/