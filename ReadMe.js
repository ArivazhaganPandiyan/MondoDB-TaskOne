/*
MONGODB TASK
============

1.Find all the information about each products
Query = {}

2.Find the product price which are between 400 to 800
Query = { "product_price": { $gte: 400, $lte: 800 } }

3.Find the product price which are not between 400 to 600
Query = { "product_price": { $not: { $gte: 400, $lte: 600 } } }

4.List the four product which are greater than 500 in price 
Query = {"product_price":{"$gt":500}}
Project = {"product_name":1,"product_price":1}
Limit = 4

5.Find the product name and product material of each products
Query = { }
Project =  {"product_name":1,"product_material":1}

6.Find the product with a row id of 10
Query = {"_id":"10"}

7.Find only the product name and product material
Query = { }
Project =  {"product_name":1,"product_material":1, "_id":0}

8.Find all products which contain the value of soft in product material 
Query = { "product_material": { $regex: /soft/i } }

9.Find products which contain product color indigo  and product price 492.00
Query = {"product_color":"indigo", "product_price":492.00}

10.Delete the products which product price value are same
{ "product_price": { "$ne": null } }



*/