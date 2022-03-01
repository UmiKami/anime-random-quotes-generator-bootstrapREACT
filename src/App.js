import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [ hasLoaded, setHasLoaded ] = useState(false);

	const [ quote, setQuote ] = useState('');
	const [ character, setCharacter ] = useState('');
	const [ title, setTitle ] = useState('');

	useEffect(
		() => {
			if (!hasLoaded) {
				setHasLoaded(true);

				fetch('http://animechan.vercel.app/api/random', {
					method: 'GET',
					headers: {}
				})
					.then((response) => {
						return response.json();
					})
					.then((result) => {
						setQuote(result.quote);
						setCharacter(result.character);
						setTitle(result.anime);
					})
					.catch((err) => {
						console.error(err);
					});
			}
		},
		[ quote, setHasLoaded, hasLoaded, title ]
	);

	const changeQuote = () => {
		fetch('http://animechan.vercel.app/api/random', {
			method: 'GET',
			headers: {}
		})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				setQuote(result.quote);
				setCharacter(result.character);
				setTitle(result.anime);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div className="container-fluid main-content d-flex justify-content-center align-items-center">
			<div className="card col-4">
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<p className="quote py-2">"{quote}"</p>
						<footer className="blockquote-footer">
							{character} in<cite title="Source Title"> {title}</cite>
						</footer>

						<button className="btn btn-primary-v2" onClick={() => changeQuote()}>
							New Quote
						</button>
					</blockquote>
				</div>
			</div>
		</div>
	);
}

export default App;
