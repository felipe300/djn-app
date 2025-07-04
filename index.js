import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Docker & Jenkins for node app");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
