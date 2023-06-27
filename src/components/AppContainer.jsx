import { React, useEffect } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'


export default function AppContainer() {
	const navigate = useNavigate()
	const authenticateSession = async () => {
		const response = await fetch('http://127.0.0.1:8000/bias_test/api/authenticate-session',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					session_token: sessionStorage.getItem('session_token'),
				}),	
			})
			response.status === 403 ? navigate('/login') : navigate('/profile')
	}

	useEffect(() => {authenticateSession()}, [])

	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	)
}