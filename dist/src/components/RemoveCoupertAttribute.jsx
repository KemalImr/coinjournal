"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RemoveCoupertAttribute;
const react_1 = require("react");
function RemoveCoupertAttribute() {
    (0, react_1.useEffect)(() => {
        document.documentElement.removeAttribute('coupert-item');
    }, []);
    return null;
}
