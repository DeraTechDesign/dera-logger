const setupLogger = require("./index.js");

const options = {
  logDirectory: "logs",
  timestampFormat: "YYYY-MM-DD HH:mm:ss",
  addConsoleInNonProduction: true,
  transports: [
    { filename: "combined", level: "silly", source: "backend" },
    { filename: "error", level: "warn", source: "backend" },
    { filename: "combined", level: "silly", source: "frontend" },
    { filename: "error", level: "warn", source: "frontend" },
  ],
};

const logger = setupLogger(options);

logger.log({ level: "info", message: "Hello world!", source: "backend" });
logger.log({ level: "error", message: "Hello error!", source: "frontend" });
