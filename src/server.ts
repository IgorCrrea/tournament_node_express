import express from "express";
import { route } from "./config/routes";
import { errorHandler } from "./middleware/error_middleware";

// const route = Router()
// route.get('/', (req: Request, res: Response) => {
//     const data = {message: "Hello World"}
//     res.json(data)
// });

// route.post('/', (req: Request, res: Response) => {
//     res.json({response: "Essa é a response", ...req.body})
// })

const app = express()
const port = 3000;
app.use(express.json())
app.use(route);
app.use(errorHandler)

app.listen(port, () => `Server running on port ${port}`)