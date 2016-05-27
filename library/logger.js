"use strict";

import log4js from "log4js";
import helper from "./helper";
import config from "./config";

class Logger {

    constructor() {
        let log_type = config.get("log.type");
        let log_path = config.get("log.path");
        let log_status = config.get("log.status");

        log4js.configure({
            appenders: [
                {type: log_type, filename: log_path + "/" + helper.date() + ".log", category: "log"}
            ]
        });

        return log_status ? log4js.getLogger("log") : log4js.getLogger();
    }
}

export default new Logger();
