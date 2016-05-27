/**
 * Created by shuc on 16/5/26.
 */
"use strict";

import Middleware from "./middleware";

export default class Auth extends Middleware {

    run = (request) => {

        return request;
    };
}