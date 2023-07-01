import * as React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...'
  }
  return text
}

function FeaturedPost(props) {
  const { post } = props
  const truncatedBrief = truncateText(post.brief, 100)

  return (
    <Grid item xs={6}>
      <Card sx={{ height: 250 }}>
        <Box display='flex'>
          <CardMedia
            component='img'
            sx={{ width: 160, height: 250,  display: { xs: 'none', sm: 'block' } }}
            image={post.img}
            alt={post.imageLabel}
          />
          <CardActionArea component='a' href={post.link}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component='h2' variant='h5' textAlign='left'>
                {post.head}
              </Typography>
              <Typography variant='subtitle1' paragraph textAlign='left'>
                {truncatedBrief}
              </Typography>
              <Typography variant='subtitle1' color='primary' textAlign='right'>
                <Link variant='subtitle1' href={post.link} textAlign='right'>
                  Continue reading...
                </Link>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Box>
      </Card>
    </Grid>
  )
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default FeaturedPost
