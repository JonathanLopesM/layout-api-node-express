import express, { Request, Response} from "express";
import cors from "cors";
const PORT = 3333;

const app = express();

app.use(cors());

app.use(express.json());


app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World"});
})

app.post("/auth/user", async (req, res) => {
  const { username, password } = req.body;

  console.log('user')

  return res.json({message: "ok user" })
})


app.listen(PORT, 
  () => console.log("Server is running!")
  );

