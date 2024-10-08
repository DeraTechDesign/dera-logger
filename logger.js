const { createLogger, format, transports } = require("winston");
require("winston-daily-rotate-file");
const path = require("path");
const { combine, timestamp, printf } = format;

function createTransport(options) {
  return new transports.DailyRotateFile({
    filename: `${path.join(
      options.logDirectory || "logs",
      options.source || "",
      options.filename || "log"
    )}-%DATE%.log`,
    fileDatePattern: options.fileDatePattern || "YYYY-MM-DD",
    zippedArchive: options.zippedArchive || false,
    maxLogFileSize: options.maxLogFileSize || null,
    maxFiles: options.maxFiles || "14d",
    level: options.level,
    format: format.combine(
      format((info) => (info.source === options.source ? info : false))()
    ),
  });
}

function setupLogger(options) {
  const logger = createLogger({
    format: combine(
      timestamp({ format: options.timestampFormat || "HH:mm:ss" }),
      printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: options.transports.map((transport) =>
      createTransport(transport)
    ),
  });

  if (
    options.addConsoleInNonProduction &&
    process.env.NODE_ENV !== "production"
  ) {
    logger.add(new transports.Console());
  }

  // Helper to handle custom methods like logger.error(message, source)
  const customLogger = {};

  ["error", "warn", "info", "verbose", "debug", "silly"].forEach((level) => {
    customLogger[level] = (message, source) => {
      logger.log({
        level,
        message,
        source,
      });
    };
  });

  return customLogger;
}

module.exports = setupLogger;
