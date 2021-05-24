import "core-js/stable";
import "regenerator-runtime/runtime";

import createApp from "./app";

const app = createApp({ logger: true });

app.listen(8080);
