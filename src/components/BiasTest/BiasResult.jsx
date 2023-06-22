import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
} from '@mui/material'
import Footer from '../Footer.jsx'

export function BiasResult({ user_id }) {
  const [results, setResults] = useState(null)

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/bias_test/api/get-bias-results/${user_id}/`,
          {
            method: 'GET',
          }
        )
        const data = await response.json()
        setResults(data)
      } catch (error) {
        console.error('Error fetching bias results:', error)
      }
    }

    fetchResults()
  }, [user_id])

  if (!results) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Container>
      <Box sx={{ textAlign: 'center', paddingTop: 4, paddingBottom: 4 }}>
        <Typography variant='h4'>Bias Test Results</Typography>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Bias Type</TableCell>
            <TableCell>Possibility</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(results).map(([bias, possibility], index) => (
            <TableRow key={index}>
              <TableCell>{bias}</TableCell>
              <TableCell>{possibility}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ textAlign: 'center', paddingTop: 4, paddingBottom: 4 }}>
        <Typography variant='subtitle1'>
          You have finished the bias test.
        </Typography>
        <Typography variant='subtitle1'>
          You can review the result in{' '}
          <Link component={RouterLink} to='/'>
            My Home
          </Link>
          .
        </Typography>
        <Footer></Footer>
      </Box>
    </Container>
  )
}

