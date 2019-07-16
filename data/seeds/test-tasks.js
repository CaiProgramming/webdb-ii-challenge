exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: 124453,
          make: "asdas",
          model: "qwecf",
          mileage: 12345,
          transmission: "sdfsdf",
          title: "tryrty"
        },
        {
          id: 2,
          VIN: 12456453,
          make: "aseedas",
          model: "qwerecf",
          mileage: 123445,
          transmission: "sdfsdwerf",
          title: "trydfgrty"
        },
        {
          id: 3,
          VIN: 12445323423,
          make: "assdfgdas",
          model: "qwebncf",
          mileage: 1230045,
          transmission: "sdftyusdf",
          title: "er4"
        }
      ]);
    });
};
