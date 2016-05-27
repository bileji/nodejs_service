/**
 * Created by shuc on 16/5/26.
 */
"use strict";

import MongoModel from "./mongo_model";

class ConnectModel extends MongoModel {

    database = () =>  {
        return "test";
    };

    schema = () => {
        return new this.Schema({
            user_id : String,
            nickname: String
        });
    };
}

export default new ConnectModel();