import './App.css'

function App() {
	return (
		<div className="container-fluid main-content d-flex justify-content-center align-items-center">
			<div className="card col-6">
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<p>A well-known quote, contained in a blockquote element.</p>
						<footer className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</footer>

            <button className="btn btn-primary">New Quote</button>
					</blockquote>
				</div>
			</div>
		</div>
	);
}

export default App;
