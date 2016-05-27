/**
 * Created by shuc on 16/5/25.
 */
"use strict";
import Service from "./service";
import ConnectModel from "../models/connect_model";

export default class Test1 extends Service {

    constructor() {
        super();
    }

    hello = () => {
        return {message: 'test1'};
    };

    mongo = () => {

        let data = new ConnectModel({nickname: "李四", user_id: 1});

        data.save();

        return this.request.baseUrl;
    };
}