const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const productsSeed = [
  {
    name: "Hello World",
    seller: "Walmart",
    description:
      "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
    short_description: "Walmart product",
    thumbnail_url: "https://placekitten.com/200/300",
    flash_day: "one",
    salePrice: 35,
    post_date: new Date(Date.now())
  },
  {
    name: "The Second Post",
    seller: "Amazon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_description: "Amazon product",
    thumbnail_url: "https://placekitten.com/200/300",
    flash_day: "two",
    salePrice: 40,
    post_date: new Date(Date.now())
  },
  {
    name: "Another One",
    seller: "Alec",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_description: "Alec product",
    thumbnail_url: "https://placekitten.com/200/300",
    flash_day: "three",
    salePrice: 50,
    post_date: new Date(Date.now())
  }
];

db.Product.remove({})
  .then(() => db.Product.collection.insertMany(productsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
