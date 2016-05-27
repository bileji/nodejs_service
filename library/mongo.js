"use strict";
import config from "./config";
import helper from "./helper";
import logger from "./logger";
import mongoose from "mongoose";

class Mongo {
    pool = new Map();

    // 连接数
    pool_num = 5;

    constructor() {
        this.load_config().get_uri().connect();
        return this;
    }

    load_config() {
        this.host = config.get("mongo.host");
        this.port = config.get("mongo.port");
        this.database = config.get("mongo.database");
        this.user = config.get("mongo.user");
        this.password = config.get("mongo.password");
        return this;
    }

    get_uri(host, port, database) {
        this.uri = "mongodb://" + (host ? host : this.host) + ":" + (port ? port : this.port) + "/" + (database ? database : this.database);
        return this;
    }

    connect(uri, options) {
        uri = !uri ? this.uri : (this.uri = uri);
        if (!options || typeof options == "undefined") {
            options = {
                user  : this.user,
                pass  : this.password,
                server: {
                    poolSize: this.pool_num
                }
            };
        }
        // 防止单一库多次连接
        let pool_unique_key = helper.md5(uri);
        if (typeof this.pool.get(pool_unique_key) == 'undefined') {
            this.mongoose = mongoose.createConnection(uri, options);
            this.mongoose.on("error", () => {
                logger.error("mongodb connecting error.");
            });
            this.pool.set(pool_unique_key, this.mongoose);
        } else {
            this.mongoose = this.pool.get(pool_unique_key);
        }
        return this;
    }

    model(collection, schema) {
        return this.mongoose.model(collection, schema);
    }

    // 切换数据库
    handover(database, options) {
        return helper.clone(this).get_uri(null, null, database).connect(null, options);
    }
}

export default new Mongo();