/**
 * Created by shuc on 16/5/24.
 */
"use strict";

import express from "express";
import helper from "./helper";
import logger from "./logger";

export let app = express();

export class route {

    static use(route, service, middleware) {
        app.use(route, (request, response) => {
            let method = request.path.replace(/^\//, "");
            try {
                // 中间件
                if (typeof middleware != 'undefined' && (typeof middleware == 'object' || typeof middleware == 'function')) {
                    request = typeof middleware == 'object' ? middleware.run(request, response) : middleware(request, response);
                }

                if (typeof service == "function") {
                    response.json(service(request));
                } else {
                    let map = helper.object_to_array(service);
                    service.request = request;
                    // 判断方法是否存在
                    Reflect.has(map, method) && typeof map[method] == "function" ? response.json(map[method]()) : response.json(helper.not_found());
                }
            } catch (e) {
                logger.error(e.stack);
                response.json(helper.not_found());
            }
        });
    }
}