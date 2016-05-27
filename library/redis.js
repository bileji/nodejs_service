/**
 * Created by shuc on 16/5/26.
 */
"use strict";

import redis from "redis";
import config from "./config";

class Redis {

    constructor() {
        this.load_config();
        let options = {
            host        : this.host,
            port        : this.port,
            max_attempts: 3
        };
        return redis.createClient(options);
    }

    load_config = () => {
        this.host = config.get("redis.host");
        this.port = config.get("redis.port");
    }
}

export default new Redis();