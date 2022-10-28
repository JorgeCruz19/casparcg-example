const express = require("express");
const { CasparCG } = require("casparcg-connection");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let connCG = new CasparCG("192.168.0.2", 5250);

app.post("/play-video", async (req, res) => {
	const { name, server, loop } = req.body;
	if (server == "A") {
		try {
			const play = await connCG.play(1, 1, name, loop, undefined, undefined, undefined, undefined, 0, 1000);
			console.log(play.response.code);
			res.status(200).json({ message: "Play video" });
		} catch (error) {
			console.log(error);
			/* res.status(500).json({ message: "Erro" }); */
		}
	}
});

app.post("/load-video", async (req, res) => {
	const { name, server, loop } = req.body;
	if (server == "A") {
		try {
			const play = await connCG.load(1, 1, name);
			console.log(play.response.code);
			res.status(200).json({ message: "Play video" });
		} catch (error) {
			console.log(error);
			/* res.status(500).json({ message: "Erro" }); */
		}
	}
});

app.post("/loop-video", async (req, res) => {
	const { name, server, loop } = req.body;
	if (server == "A") {
		try {
			const play = await connCG.play(1, 1, name, loop);
			console.log(play.response.code);
			res.status(200).json({ message: "Play video" });
		} catch (error) {
			console.log(error);
			/* res.status(500).json({ message: "Erro" }); */
		}
	}
});

app.listen(port, () => {
	console.log("Run server at ", port);
});
