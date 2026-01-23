const express = require("express")
const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");

const port = 5000;

app.use(express.json());
app.use(cors());

const db = "mongodb+srv://qasem:Speed-123@cluster0.o6cevln.mongodb.net/todoapp?appName=Cluster0";

mongoose.connect(db)
    .then(() => {
        console.log("connection is done");
    })
    .catch((err) => {
        console.log(err);
    })

app.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.json({ message: "User created", user });
    } catch (err) {
        console.log(err); // <- log full error to backend console
        res.status(500).json({ message: err.message });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });

        res.json({
            token,
            user: { username: user.username, email: user.email },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
});

app.get("/todos", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


app.post("/todos", async (req, res) => {
    try {
        const { text } = req.body;
        const todo = await Todo.create({ text });
        res.json(todo)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


app.delete("/todos/:id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "Todo Deleted" })
    }
    catch (err) {
        res.status(500).json(err)
    }
})

app.put("/todos/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        todo.completed = !todo.completed;
        await todo.save();
        res.json(todo);
    } catch (err) {
        res.status(500).json(err);
    }
});



app.listen(port, () => {
    console.log(`iam on port ${port}`);
})