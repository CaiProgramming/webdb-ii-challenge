const db = require("../dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};
async function find() {
  let data = await db
    .select()
    .table("cars")
    .then(res => {
      return res;
    });
  return data;
}
async function findById(id) {
  let data = await db
    .select()
    .table("cars")
    .where("id", id)
    .then(res => {
      return res;
    })
    .catch(res => {
      return res;
    });
  return data;
}
async function add(car) {
  const [id] = await db.insert(car).table("cars");
  return await findById(id);
}
async function update(id, car) {
  await db
    .update(car, "*")
    .table("cars")
    .where({ id });
  return findById(id);
}
async function remove(id) {
  return await db
    .where({ id })
    .del()
    .table("cars");
}
