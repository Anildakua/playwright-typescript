import winston from "winston";
import moment from "moment-timezone";
import path from "path";


// const currentDir = __dirname;
// // Go one level above (back to 'src')
// const srcDir = path.resolve(currentDir, "..");

// // Change to 'logging' folder
// const loggingDir = path.resolve(srcDir, "logges"); 


// Function to format log entries with timestamp and timezone
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Set the desired timezone
//const timeZone = "Europe/London"; // For the UK
// const timeZone = 'America/New_York'; // For the US
const timeZone = "Asia/Kolkata"; // For India


// Create a Winston logger instance
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: () => moment().tz(timeZone).format()
        }),
        customFormat
    ),

      transports: [
    new winston.transports.Console(),/*{ level: "debug" }*/
    new winston.transports.File({
      filename: path.join("./logges/test_run.log"),
      maxFiles: 5, // Number of log files to retain
      maxsize: 300 * 1024, // 10 * 1024 ==10 KB, specify the size in bytes
      level: "info",
    }),
    new winston.transports.File({
      filename: path.join("./logges/test_error.log"),
      maxFiles: 5, // Number of log files to retain
      maxsize: 10 * 1024, // 10 KB, specify the size in bytes
      level: "error",
    }),
  ],
})

export default logger ;

