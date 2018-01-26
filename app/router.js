"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { router, controller } = app;
    router.get('/wx', controller.wx.index);
};
//# sourceMappingURL=router.js.map