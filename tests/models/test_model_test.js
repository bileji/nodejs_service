/**
 * Created by shuc on 16/5/24.
 */
"use strict";

import assert from "assert";
import MongoModel from "../../models/mongo_model";
import helper from "../../library/helper";

class TestModel extends MongoModel {

    schema() {
        return new this.Schema({
            user_id: String,
            nickname: String
        });
    }
}

describe("model/test test", () => {
    it("create one document", () => {
        let test_model = new TestModel();

        let test = new test_model({nickname: "张三11", user_id: 1});
        test.save();
    });
});