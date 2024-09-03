# Logger Package

A flexible and configurable logging package for Node.js applications, built with Winston and supporting daily log rotation.

## Installation

Install the package using npm:

```bash
npm install your-logger-package-name
```

## Configuration

The logger can be configured with a variety of options to suit different logging needs. Here’s a breakdown of the available configuration options:

logDirectory: The base directory for storing log files (default: logs).
timestampFormat: The timestamp format for log entries (default: HH:mm:ss).
addConsoleInNonProduction: Whether to add console transport in non-production environments (default: false).
transports: An array of transport configurations. Each transport can be configured with:
filename: Base name for the log file (default: log).
source: Subdirectory or categorization for the log files.
level: Log level (e.g., info, warn, error).
fileDatePattern: Date pattern used for rotating files (default: YYYY-MM-DD).
zippedArchive: Whether to compress archived log files (default: false).
maxLogFileSize: Maximum size of the log file before it’s rotated.
maxFiles: How long to keep log files for (default: 14d).

## Usage

const setupLogger = require('your-logger-package-name');

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

logger.log({
level: 'info',
message: 'This is a test log message!',
source: 'backend'
});

## License
