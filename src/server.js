import { app } from './app.js';
import { envData } from './config/env.js';

app.listen(envData.server_port, () => {
    console.log(`Server is running on port ${envData.server_port}`)
});
