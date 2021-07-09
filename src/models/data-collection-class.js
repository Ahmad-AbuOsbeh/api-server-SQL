'use strict';
const pool = require('./Pool');

class Interface {
  constructor(route) {
    this.route = route;
  }

  read(id) {
    if (id) {
      // return pool.query('SELECT * FROM $1 WHERE id=$2;', [this.route, id]);
      return pool.query(`SELECT * FROM ${this.route} WHERE id=$1;`, [id]);
    }
    // return pool.query('SELECT * FROM $1;', [this.route]);
    return pool.query(`SELECT * FROM ${this.route};`);
  }

  create(obj) {
    console.log('hellooo from create method');
    console.log('this.route', this.route);
    // const sql = 'INSERT INTO $1 (type,color) VALUES ($2,$3) RETURNING *;';
    const sql = `INSERT INTO ${this.route} (type,color) VALUES ($1,$2) RETURNING *;`;

    // const safeValues = [this.route, obj.type, obj.color];
    const safeValues = [obj.type, obj.color];

    // console.log('pool.query(sql, safeValues)', pool.query(sql, safeValues));
    return pool.query(sql, safeValues);
  }

  update(id, obj) {
    // const sql = 'UPDATE $1 SET type=$2,color=$3 WHERE id=$4 RETURNING *;';
    const sql = `UPDATE ${this.route} SET type=$1,color=$2 WHERE id=$3 RETURNING *;`;

    // const safeValues = [this.route, obj.type, obj.color, id];
    const safeValues = [obj.type, obj.color, id];

    return pool.query(sql, safeValues);
  }

  delete(id) {
    // return pool.query('DELETE FROM $1 WHERE id=$2 RETURNING *;', [this.route,id]);
    return pool.query(`DELETE FROM ${this.route} WHERE id=$1 RETURNING *;`, [
      id,
    ]);
  }
}

module.exports = Interface;
