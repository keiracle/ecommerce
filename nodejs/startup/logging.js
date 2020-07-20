require("express-async-errors");
const config = require("config");
const winston = require("winston");
require("winston-mongodb");

module.exports = () => {
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
  // const p = Promise.reject(new Error("Unhandle rejection"));
  // p.then(() => {});

  const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: "logfile.log" }),
      new winston.transports.MongoDB({
        db: config.get("database"),
        options: { useUnifiedTopology: true },
        //   handleExceptions: true
      }),
    ],
    exceptionHandlers: [
      new winston.transports.File({ filename: "uncaughtExceptions.log" }),
      new winston.transports.MongoDB({
        db: config.get("database"),
        options: { useUnifiedTopology: true },
        collection: "uncaughtExceptions",
      }),
    ],
    exitOnError: true, // true by default and it's good
  });

  winston.loggers.add("logger", {
    transports: [
      new winston.transports.File({ filename: "logfile.log" }),
      new winston.transports.MongoDB({
        db: config.get("database"),
        options: { useUnifiedTopology: true },
        //   handleExceptions: true
      }),
    ],
    exceptionHandlers: [
      new winston.transports.File({ filename: "uncaughtExceptions.log" }),
      new winston.transports.MongoDB({
        db: config.get("database"),
        options: { useUnifiedTopology: true },
        collection: "uncaughtExceptions",
      }),
    ],
    exitOnError: true, // true by default and it's good
  });
};
