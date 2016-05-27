/**
 * Created by shuc on 16/5/25.
 */
"use strict";

export default class Response {

    static SUCCESS = {
        code: 200,
        message: 'success'
    };

    static NOT_FOUND = {
        code: 404,
        message: 'not found'
    };

    static format(response, data) {
        (typeof data == 'undefined') && (data = {});
        return {code: response.code, message: response.message, data: data};
    }
}