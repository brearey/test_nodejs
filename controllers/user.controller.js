const db = require('../db');

class UserController {
    async createUser(req, res) {
        //деструктуризация данных
        const {name, surname} = req.body;
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname]);
        res.json(newPerson.rows[0]);
    }
    async getUsers(req, res) {
        const allPersons = await db.query(`SELECT * FROM person`);
        res.json(allPersons.rows);
    }
    async getOneUser(req, res) {
        const onePerson = await db.query(`SELECT * FROM person WHERE id = $1`, [req.params.id]);
        res.json(onePerson.rows[0]);
    }
    async updateUser(req, res) {
        //деструктуризация данных
        const {id, name, surname} = req.body;
        const updatedPerson = await db.query(`UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`, [name, surname, id]);
        res.json(updatedPerson.rows[0]);
    }
    async deleteUser(req, res) {
        const deletedPerson = await db.query(`DELETE FROM person WHERE id = $1`, [req.params.id]);
        res.json(`User with id = ${req.params.id} has been deleted`);
    }
}

module.exports = new UserController()