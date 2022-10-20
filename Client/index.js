const express = require('express');
const app = express();
const cors = require('cors');
const Pool = require('../Server/db');
const { application } = require('express');

//middleware
app.use(cors());
app.use(express.json());

//Routes

//create a userProfile"
app.post('/', async(req, res) => {
    try {
        
        // const { description } = req.body;
        const newProfile = await Pool.query(`INSERT INTO users(username, email, password, user_location, user_id) VALUES (${username}, ${email}, ${password}, ${user_location}, ${user_id}) RETURNING *`,
        // [description]
        );

        res.json(newProfile);
    } catch (err) {
        console.error(err.message);
    }
});
//get all 

app.get("/users", async(req, res) => {
    try {
            const userProfile = await Pool.query("SELECT * FROM users");
            res.json(users.rows);
        }   catch (err) {
            console.error(err.message)
        }
    });


//  app.get("/todos/:id", async(req, res) => {
//     try {
//         const { id } = req.params;
//         const todo = await Pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

//         res.json(todo.rows);
//     }   catch (err) {
//         console.error(err.message)
//     }
//  }) ;  


app.put("/profile/:id", async(req, res) => {
    try {

        const {id} = req.params;
        const {description} = req.body;
        const updateProfile = await Pool.query("UPDATE profile SET description = JohnDoe WHERE profile_id = 1", [description, id ]);

        res.json("The profile was updated!");
     } catch (err) {
        console.error(err.message)
        }

    })

app.listen(3001, () => {
    console.log('Success! listening on goalMates port');
});