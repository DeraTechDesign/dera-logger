const setupLogger = require("dera-logger");

// levels
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6

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
    { filename: "combined", level: "silly" }, // source is optional
    { filename: "error", level: "warn" },
  ],
};

const logger = setupLogger(options);

logger.error("An error occurred", "backend");
logger.info("A new request has been received");
