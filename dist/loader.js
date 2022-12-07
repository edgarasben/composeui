"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var react_1 = __importDefault(require("react"));
var Loader = function () {
    return (react_1.default.createElement("span", { className: "block h-5 w-5 animate-spin rounded-[50%] border-t-2 border-r-2 border-solid border-t-white border-r-transparent" }));
};
exports.Loader = Loader;
