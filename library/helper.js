"use strict";

import crypto from "crypto";

export default class {

    static word_upper(word) {
        return word.toUpperCase().replace(".", "_");
    }

    static snake_name(name) {
        return name.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "");
    }

    static date() {
        let time = new Date();
        return time.getFullYear() + "-" + ("0" + (time.getMonth() + 1)).substr(-2) + "-" + ("0" + time.getDate()).substr(-2);
    }

    static object_to_array(object) {
        let map = new Map();
        if (typeof object == "object") {
            for (let [key, value] of Object.entries(object)) {
                (key && value) && (map[key] = value);
            }
        }
        return map;
    }

    static not_found() {
        return {code: 404, message: "not found", data: {}};
    }

    static clone(origin) {
        return Object.assign(Object.create(Object.getPrototypeOf(origin)), origin);
    }

    static md5(text) {
        let hasher = crypto.createHash('md5');
        hasher.update(text);
        return hasher.digest('hex');
    }
}