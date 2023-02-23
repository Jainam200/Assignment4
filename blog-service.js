/*********************************************************************************
*  WEB322 – Assignment 03
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Jainam Hareshkumar Prajapati
*  Student ID: 162121214       
*  Date: 22 February, 2023
*
*  Online (Cyclic) Link:  https://vast-blue-deer-cuff.cyclic.app
*
********************************************************************************/

const fs = require("fs");

let posts = [];
let categories = [];

const initialize = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/posts.json", "utf8", (err, data) => {
      if (err) return reject("unable to read file");
      posts = JSON.parse(data);
      fs.readFile("./data/categories.json", "utf8", (err, data) => {
        if (err) return reject("unable to read file");
        categories = JSON.parse(data);
        resolve();
      });
    });
  });
};

const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    if (posts.length === 0) return reject("no results returned");
    resolve(posts);
  });
};

const getPublishedPosts = () => {
  return new Promise((resolve, reject) => {
    const publishedPosts = posts.filter(post => post.published === true);
    if (publishedPosts.length === 0) return reject("no results returned");
    resolve(publishedPosts);
  });
};

const getCategories = () => {
  return new Promise((resolve, reject) => {
    if (categories.length === 0) reject("no results returned");
    resolve(categories);
  });
};

module.exports = {
  initialize,
  getAllPosts,
  getPublishedPosts,
  getCategories
};
