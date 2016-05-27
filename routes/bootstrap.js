/**
 * Created by shuc on 16/5/25.
 */
"use strict";

import {app, route} from "../library/route";

import Auth from "./middlewares/auth";

import Response from "./response";
import Test from "../services/test1";


class bootstrap {

    constructor() {
        //定义路由
        route.use('/test', function() {
            return Response.format(Response.SUCCESS)
        });

        route.use('/test1', new Test(), new Auth());

        this.successor();
    }

    successor() {
        route.use('*', function () {
            return "no way!";
        });
        this.app = app;
    }
}

export default new bootstrap();