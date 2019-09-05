require('dotenv').config()
const mysql = require('mysql2');
const inquirer = require('inquirer');

let name = "Lovepreet"

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.SQLPASS,
    database: "retailstore_db"
  });
  ​
  connection.connect(function(err) {
    if (err) {
      console.log(err);
    }
    console.log(connection.threadId);
    showInventory();
    // connection.end();
  });
  ​
  const showInventory = () => {
    connection.query(`SELECT * FROM products`, function(err, res) {
      console.table(res);
      selectItem();
    });
  };
  ​
  const selectItem = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: `Welcome ${name}. What product would you like to buy`
        }
      ])
      .then(function(val) {
        let itemId = val.choice;
        console.log(`This is the item selected ${val.choice}`);
        howMany(itemId);
      });
  };
  ​
  const howMany = itemId => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "quant",
          message: `Good choice ${name}. How many would you like to buy?`
        }
      ])
      .then(function(val) {
        let quantity = val.quant;
        console.log(`This is the quantity --> ${val.quant} .`);
        makePurchase(itemId, quantity);
      });
  };
  ​
  const makePurchase = (itemId, quantity) => {
    // console.log(itemId, quantity);
    connection.query(
      "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ? ",
      [quantity, itemId],
      function(err, res) {
        if (err) {
          console.log(err);
        }
        console.log(
          `Awesome ${name}! Your purchase is complete, You bought ${quantity} items of ${itemId}`
        );
        showInventory();
      }
    );
  };