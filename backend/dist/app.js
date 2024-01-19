"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const team_routes_1 = __importDefault(require("./routes/team.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const models_util_1 = require("./models/models.util");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/teams', team_routes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
database_1.sequelize
    .authenticate()
    .then(() => {
    console.log('Database connection has been established successfully.');
})
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
(0, models_util_1.setModelRelations)();
console.log('process.env.PORT', process.env.PORT);
const PORT = parseInt(process.env.PORT, 10) || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map