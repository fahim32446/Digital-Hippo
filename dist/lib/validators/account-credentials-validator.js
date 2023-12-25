"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var zod_1 = require("zod");
exports.Validator = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, { message: 'Must be 8 characters long' }),
});
