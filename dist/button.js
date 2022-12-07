"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var loader_1 = require("./loader");
var baseClasses = "inline-flex items-center rounded-lg border font-medium focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-3 dark:ring-offset-neutral-1";
var sizeClasses = {
    "2xs": "px-3 py-1 space-x-2 text-xs",
    xs: "px-3.5 py-2 space-x-2 text-sm",
    sm: "px-4 py-2.5 space-x-2 text-sm",
    md: "px-4.5 py-2.5 space-x-2 text-base",
    lg: "px-5 py-3 space-x-2 text-base",
    xl: "px-7 py-4 space-x-3 text-lg",
};
var Button = function (_a) {
    var children = _a.children, href = _a.href, _b = _a.type, type = _b === void 0 ? "button" : _b, _c = _a.variant, variant = _c === void 0 ? "solid" : _c, _d = _a.color, color = _d === void 0 ? "primary" : _d, _e = _a.size, size = _e === void 0 ? "md" : _e, _f = _a.loading, loading = _f === void 0 ? false : _f, props = __rest(_a, ["children", "href", "type", "variant", "color", "size", "loading"]);
    var colorClasses = {
        "border-transparent": true,
        // primary solid
        "bg-primary-9 text-white hover:bg-primary-10 active:bg-primary-11 focus:ring-primary-7": color === "primary" && variant === "solid",
        // primary subtle
        "bg-primary-a-4 text-primary-11 hover:bg-primary-a-5 active:bg-primary-a-6 focus:ring-primary-7": color === "primary" && variant === "subtle",
        // neutral solid
        "bg-neutral-12 text-neutral-1 hover:bg-neutral-12 active:bg-neutral-12/90 focus:ring-neutral-7": color === "neutral" && variant === "solid",
        // neutral subtle
        "bg-neutral-a-4 text-neutral-11 hover:bg-neutral-a-5 active:bg-neutral-a-6 focus:ring-neutral-7": color === "neutral" && variant === "subtle",
    };
    var buttonContent = (react_1.default.createElement(react_1.default.Fragment, null,
        children && react_1.default.createElement("span", null, children),
        loading && react_1.default.createElement(loader_1.Loader, null)));
    return (react_1.default.createElement("button", __assign({ type: type, className: (0, classnames_1.default)(baseClasses, sizeClasses[size], colorClasses) }, props), buttonContent));
};
exports.Button = Button;
