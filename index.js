const liveServer = require("live-server");

const params = {
	root: "./public", // Set root directory that's being served. Defaults to cwd.
	file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
};
liveServer.start(params);