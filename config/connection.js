const { connect, connection } = require("mongoose");

connect("mongodb://localhost/studentStats", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
