/**
 * Created by shuc on 16/5/24.
 */
"use strict";

import assert from "assert";
import Mongo from "../../library/mongo";

describe("library/mongo test", () => {
    let mongo = new Mongo();

    it("1. authentication:", () => {
        assert.ok(mongo.get_uri());
    });

    it("2. connect", () => {
        assert.ok(mongo.connect());
    });

    it("3. collection", () => {
        mongo.collection();
        assert.equal(mongo.collection_name, "mongo");
    });

    it("4. schema", () => {
        mongo.schema();
        assert.ok(mongo.collection_schema);
    });
});