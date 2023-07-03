import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid, Card, CardContent } from '@mui/material'
import { PostDetail } from './PostDetail'
import { Reply } from './Reply'

export function Post(props) {
  const post_index = props.post_index
  const [post, setPost] = useState({})
  const [replies, setReply] = useState([])
  console.log('the post index is' + post_index)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/bias_test/api/one_post/${post_index}/`
        )
        const data = await response.json()
        setPost({
          ...data.post,
          postDate: new Date(data.post.postDate),
        })
        setReply(
          data.replies.map((reply) => ({
            ...reply,
            postDate: new Date(reply.postDate),
          })
          )
        )
      } catch (err) {
        console.error('Error fetching posts:', err)
      }
    }

    fetchPosts()
  }, [post_index])

  /*
  const post = {
    title: `Post Title ${post_index + 1}`,
    poster: `User ${post_index + 1}`,
    postDate: new Date(),
    numberOfReplies: post_index * 10,
    details:
      'hahahahahahshsujdfgujbxhjcgaskcbzshjcbsjhfbsdjhcbxjhcsdjhcgsducbsdjucsdjkucbdsujcgdyucbsdcjkhsdgcsdujkcbdjkbdjkvcj bxjkvdcjkvdfkvbdjvsdjuvbfmvbndfjknvxcjm,vbnkcx,vhduigdsvbdjbjhcvsjcbhjcskjcvsdkvbasjcshdgjcvsjdu\nshAIOHNAJKSDHASKJSJHCBSHSDGFKJASFGSDUIFSDUJFSDKUIFSD HSDFOLJGFDKLGHDFKL HFSDKIFHSDKJFHSDIKhvdfkighdklfhdsjkhsduklfhsdujkfgdiufe\nhiwesfhedjsbfdajkbsdjhfbsdjfbsdjmfbsdkfhsdifhadmfnvsidukfhndfjkjvghndfkj',
  }*/
  /*
  const replies = [
    {
      id: 1,
      title: 'Reply 1',
      poster: 'User1',
      postDate: new Date(),
      details:
        'This is the first reply.When people first started browsing the web for information, the experience was “on rails.” Customization was more of an afterthought, and there was not much content to peruse. Even so, discussion forums were an instant hit among early pioneers of the Internet.',
      avatar: 'https://example.com/avatar2.jpg',
      replies: [
        {
          id: 2,
          title: 'Reply 1.1',
          poster: 'User2',
          postDate: new Date(),
          details:
            'This is a reply to the first reply. When people first started browsing the web for information, the experience was “on rails.” Customization was more of an afterthought, and there was not much content to peruse. Even so, discussion forums were an instant hit among early pioneers of the Internet.',
          replies: [
            {
              id: 8,
              title: 'Reply 1.1.1',
              poster: 'User5',
              postDate: new Date(),
              details:
                'This is a reply to Reply 1.1. When people first started browsing the web for information, the experience was “on rails.” Customization was more of an afterthought, and there was not much content to peruse. Even so, discussion forums were an instant hit among early pioneers of the Internet.',
              replies: [],
            },
          ],
        },
        {
          id: 3,
          title: 'Reply 1.2',
          poster: 'User3',
          postDate: new Date(),
          details:
            'This is another reply to the first reply. When people first started browsing the web for information, the experience was “on rails.” Customization was more of an afterthought, and there was not much content to peruse. Even so, discussion forums were an instant hit among early pioneers of the Internet.',
          replies: [],
        },
        {
          id: 4,
          title: 'Reply 1.3',
          poster: 'User4',
          postDate: new Date(),
          details:
            'This is yet another reply to the first reply. When people first started browsing the web for information, the experience was “on rails.” Customization was more of an afterthought, and there was not much content to peruse. Even so, discussion forums were an instant hit among early pioneers of the Internet.',
          replies: [],
        },
      ],
    },
    {
      id: 5,
      title: 'Reply 2',
      poster: 'User5',
      postDate: new Date(),
      details:
        'This is the second reply. When people first started browsing the web for information, the experience was “on rails.” Customization was more of an afterthought, and there was not much content to peruse. Even so, discussion forums were an instant hit among early pioneers of the Internet.',
      replies: [],
    },
    {
      id: 6,
      title: 'Reply 3',
      poster: 'User6',
      postDate: new Date(),
      details:
        'This is the third reply. When people first started browsing the web for information, the experience was “on rails.” Customization was more of an afterthought, and there was not much content to peruse. Even so, discussion forums were an instant hit among early pioneers of the Internet.',
      replies: [],
    },
    {
      id: 7,
      title: 'Reply 4',
      poster: 'User7',
      postDate: new Date(),
      details:
        'This is the fourth reply. When people first started browsing the web for information, the experience was “on rails.” Customization was more of an afterthought, and there was not much content to peruse. Even so, discussion forums were an instant hit among early pioneers of the Internet.',
      replies: [],
    },
  ]*/

  const renderReplies = (replies, isReply = false) => {
    return replies.map((reply) => (
      <Box mb={2}>
        <React.Fragment key={reply.id}>
          <Reply reply={reply} isReply={isReply} />
          {renderReplies(reply.replies, true)}
        </React.Fragment>
      </Box>
    ))
  }

  return (
    <div>
      {/**first post**/}
      <Card>
        <CardContent>
          <Box mb={5}>
            <PostDetail
              post_index={post_index}
              title={post.title}
              poster={post.poster}
              postDate={post.postDate}
              numberOfReplies={post.numberOfReplies}
              biasIndex={post.bias_index}
            />
          </Box>
          <Typography variant='h6' textAlign='left'>
            {post.details}
          </Typography>
        </CardContent>
      </Card>

      {/**reply**/}
      <Box mt={5}>{renderReplies(replies)}</Box>
    </div>
  )
}
