// // const mongoose = require("mongoose");

// // // const MongoClient = require("mongodb").MongoClient;
// // const uri =
// //   "mongodb+srv://yousuf:**passw**@cluster1.2xgza.mongodb.net/sample_mflix?retryWrites=true&w=majority";
// // // const client = new MongoClient(uri, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // });
// // // client.connect((err) => {
// // //   const collection = client.db("test").collection("devices");
// // //   // perform actions on the collection object
// // //   client.close();
// // // });

// mongoose
//   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("The operation is successful"))
//   .catch((err) => console.log("Holy Shiiiiiiit", err));

// // // mongoose.connection.on("connected", () => {
// // //   console.log("Hi yousuf..............you should see this!!!!!");
// // // });

// // // try {
// // //   mongoose.connect(
// // //     uri,
// // //     { useNewUrlParser: true, useUnifiedTopology: true },
// // //     () => console.log("connected")
// // //   );
// // // } catch (error) {
// // //   console.log("could not connect");
// // // }

// const mongoose = require("mongoose");
// const db = `mongodb+srv://yousuf:new@cluster1.2xgza.mongodb.net/sample_mflix?retryWrites=true&w=majority`;
// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//   })
//   .then(() => console.log("MongoDB connected..."))
//   .catch((err) => console.log("zzzzzzzzzzzzzzzzzzzzzzzzz", err));

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://yousuf:***MYPASSW_WITHOUT_STARS***@cluster1.2xgza.mongodb.net/testdatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("The operation is successful"))
  .catch((err) => console.log("Holy Shiiiiiiit", err));

const studentsSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Students = mongoose.model("Students", studentsSchema);

async function createstudents() {
  const students = new Students({
    name: "suhail",
    author: "nobody",
    tags: ["react", "froack"],
    isPublished: true,
  });
  const result = await students.save();
  console.log(result);
}

const displayFunc = async () => {
  const students_all = await Students.find();
  console.log(students_all);
};
createstudents();
displayFunc();
