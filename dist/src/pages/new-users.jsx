"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewUser;
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
function NewUser() {
    const [name, setName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [message, setMessage] = (0, react_1.useState)('');
    const handleSubmit = (event) => __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        try {
            const response = yield axios_1.default.post('/api/user/users', { name, email });
            setMessage(`User ${response.data.name} created successfully!`);
            setName('');
            setEmail('');
        }
        catch (error) {
            setMessage('Error creating user.');
        }
    });
    return (<div>
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <button type="submit">Create User</button>
      </form>
      {message && <p>{message}</p>}
    </div>);
}
