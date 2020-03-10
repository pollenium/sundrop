"use strict";
exports.__esModule = true;
var _1 = require("./");
var pollenium_snowdrop_1 = require("pollenium-snowdrop");
var sundrop;
var snowdrops = [];
test('create sundrop', function () {
    sundrop = new _1.Sundrop();
});
test('create snowdrops', function () {
    for (var i = 0; i < 3; i++) {
        snowdrops.push(new pollenium_snowdrop_1.Snowdrop());
    }
    expect(snowdrops.length).toBe(3);
});
test('set parent 0; test 2 emits', function () {
    expect.assertions(2);
    sundrop.setParentSnowdrop(snowdrops[0]);
    var sundropHandleId = sundrop.addHandle(function (number) {
        expect(number).toBe(0);
    });
    snowdrops[0].emit(0);
    snowdrops[0].emit(0);
    sundrop.removeHandleById(sundropHandleId);
});
test('set parent 1; test 3 emits', function () {
    expect.assertions(3);
    sundrop.setParentSnowdrop(snowdrops[1]);
    var sundropHandleId = sundrop.addHandle(function (number) {
        expect(number).toBe(1);
    });
    snowdrops[1].emit(1);
    snowdrops[1].emit(1);
    snowdrops[1].emit(1);
    sundrop.removeHandleById(sundropHandleId);
});
test('emitting snowdrop 1 should be received', function () {
    expect.assertions(1);
    var sundropHandleId = sundrop.addHandle(function (number) {
        expect(number).toBe(1);
    });
    snowdrops[1].emit(1);
    sundrop.removeHandleById(sundropHandleId);
});
