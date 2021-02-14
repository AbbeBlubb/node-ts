import * as express from "express";
import { mainRoute } from "./routes/main.route";
import { pingRoute } from "./routes/ping.route";

const PORT = 8080;

let app = express();

app.set('view engine', 'pug');

app.use(mainRoute);
app.use(pingRoute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
