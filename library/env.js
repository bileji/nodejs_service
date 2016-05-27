"use strict";
import helper from "./helper";
import node_env_file from  "node-env-file";

class Env {

    constructor() {
        try {
            this.data = node_env_file('.env');
        } catch (e) {
            this.data = {};
        }
    }

    get(key) {
        return this.data[helper.word_upper(key)];
    }

    set(key, value) {
        return this.data[helper.word_upper(key)] = value;
    }

    has(key) {
        return this.data.hasOwnProperty(helper.word_upper(key));
    }
}

export default new Env();