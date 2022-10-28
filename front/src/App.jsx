import './App.css'

function App() {
  const URL_API = "http://192.168.0.2:3000";

	

	const handlePlayVideo = async () => {
    const payload = {
      name: "video.mp4",
      server: "A",
      loop: false,
    };
		const res = await fetch(`${URL_API}/play-video`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(payload),
		});

		const data = await res.json();

		console.log({ data });
	};
	const handleLoadVideo = async () => {
    const payload = {
      name: "video.mp4",
      server: "A",
    };
		const res = await fetch(`${URL_API}/load-video`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(payload),
		});

		const data = await res.json();

		console.log({ data });
	};
	const handleLoopVideo = async () => {
    const payload = {
      name: "video.mp4",
      server: "A",
      loop: true,
    };
		const res = await fetch(`${URL_API}/loop-video`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(payload),
		});

		const data = await res.json();

		console.log({ data });
	};
  return (
    <div className="App">
      <button type="button" onClick={handleLoadVideo}>
				Load video
			</button>
      <button type="button" onClick={handlePlayVideo}>
				Play video
			</button>
      <button type="button" onClick={handleLoopVideo}>
				Loop video
			</button>
    </div>
  )
}

export default App
