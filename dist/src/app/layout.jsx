"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootLayout;
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function RootLayout({ children }) {
    return (<html lang="en">
      <body>
        <div>
          <nav>
            <ul>
              <li>
                <link_1.default href="/">Home</link_1.default>
              </li>
              <li>
                <link_1.default href="/new-users">Create User</link_1.default>
              </li>
            </ul>
          </nav>
        </div>
        {children}
      </body>
    </html>);
}
