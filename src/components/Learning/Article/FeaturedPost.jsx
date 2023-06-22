import * as React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
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
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href={post.link}>
        <Card sx={{ display: 'flex', height: 250 }}>
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
          <CardMedia
            component='img'
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.img}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
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
