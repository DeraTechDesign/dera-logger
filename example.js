const setupLogger = require("dera-logger");

const options = {
  logDirectory: "logs",
  timestampFormat: "HH:mm:ss",
  fileDatePattern: "YYYY-MM-DD",
  zippedArchive: false,
  maxLogFileSize: null,
  maxFiles: "14d",
  addConsoleInNonProduction: true,
  transports: [
    { filename: "combined", level: "silly", source: "backend" },
    { filename: "error", level: "warn", source: "backend" },
    { filename: "combined", level: "silly", source: "frontend" },
    { filename: "error", level: "warn", source: "frontend" },
  ],
};

const logger = setupLogger(options);

logger.error("An error occurred", "backend");
logger.info("A new request has been received", "frontend");
