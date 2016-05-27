"use strict";
import env from "./env";
import config from "config";

export default class {

    static get(key) {
        return env.has(key) ? env.get(key) : config.get(key);
    }
}