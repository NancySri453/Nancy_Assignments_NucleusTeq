-- 1. Creating a Database e_commerce  
create database e_commerce
-- 
use e_commerce 

-- 2. Create Customers Table : 
create table Customers(customer_id int auto_increment primary key, name varchar(50), email varchar(50), mobile varchar(15));

-- 3. Create Products Table : 
create table Products(id int , name varchar(50) not null , description varchar(200),price 
decimal(10,2) not null , category varchar(50));

-- 4.Modify Tables(Using Alter Keyword)
    -- a. Add not null on name and email in the Customers table
    alter table Customers modify namem varchar(50) not null, modify email varchar(50) not null;

    -- b. Add unique key on email in the Customers table
    alter  table Customers add constraint unique_email unique(email);

    -- c. Add column age in the Customers table 
    alter table Customers add column age int;

    -- d. Change column name from id to product_id in the Products table
    alter table Products change id product_id int;

    -- e. Add primary key and auto increment on product_id in the Products table
    alter table Products modify product_id int auto_increment primary key;

    -- f. Change datatype of description from varchar to text in the Products table
    alter table Products modify description text;

--4. Create Orders Table
create table _Order(order_id int auto_increment primary key,customer_id int, 
product_id int, 
quantity int not null,  
order_date date not null,  
status enum('Pending','Success','Cancel'), 
payment_method enum('Credit','Debit','UPI'), 
total_amount decimal(10,2) not null,  
foreign key(customer_id) references Customers(customer_id));

-- 5. Modify Orders Table 
    -- a. Change table name Order -> Orders
    alter table _Order rename to Orders;

    -- b. Set default value pending in status
    alter table Orders alter column status set default 'Pending';

    -- c. Modify payment_method ENUM to add one more value: 'COD'
    alter table orders modify payment_method enum('Credit','Debit','UPI','COD')

    -- d. Make product id as foreign key 
    alter table orders add constraint foreign key (product_id) references 
    Products(product_id);

-- 6. Insert 20 sample records in all the tables
    -- Customers Table 
    INSERT INTO Customers (name, email, mobile) VALUES 
    ('Alice Johnson', 'alice@example.com', '9876543210'),
    ('Bob Smith', 'bob@example.com', '8765432109'),
    ('Charlie Brown', 'charlie@example.com', '7654321098'),
    ('David Miller', 'david@example.com', '6543210987'),
    ('Emma Wilson', 'emma@example.com', '5432109876'),
    ('Franklin Harris', 'frank@example.com', '4321098765'),
    ('Grace Thompson', 'grace@example.com', '3210987654'),
    ('Hank White', 'hank@example.com', '2109876543'),
    ('Ivy Lee', 'ivy@example.com', '1098765432'),
    ('Jack Carter', 'jack@example.com', '9876543211'),
    ('Kelly Adams', 'kelly@example.com', '8765432102'),
    ('Leo Parker', 'leo@example.com', '7654321093'),
    ('Mona Scott', 'mona@example.com', '6543210984'),
    ('Nathan King', 'nathan@example.com', '5432109875'),
    ('Olivia Wright', 'olivia@example.com', '4321098766'),
    ('Paul Baker', 'paul@example.com', '3210987657'),
    ('Quincy Hall', 'quincy@example.com', '2109876548'),
    ('Rachel Evans', 'rachel@example.com', '1098765439'),
    ('Steve Nelson', 'steve@example.com', '9876543220'),
    ('Tina Rogers', 'tina@example.com', '8765432101');

    -- Products Table 
    INSERT INTO Products (name, description, price, category)
    VALUES
    ('Laptop', 'High-performance laptop with 16GB RAM', 799.99, 'Electronics'),
    ('Smartphone', 'Latest Android smartphone with 128GB storage', 599.99, 'Electronics'),
    ('Headphones', 'Wireless noise-canceling headphones', 199.99, 'Accessories'),
    ('Smartwatch', 'Fitness tracking smartwatch with heart rate monitor', 149.99, 'Wearables'),
    ('Gaming Console', 'Next-gen gaming console with 1TB storage', 499.99, 'Gaming'),
    ('Tablet', '10-inch tablet with stylus support', 299.99, 'Electronics'),
    ('Bluetooth Speaker', 'Portable Bluetooth speaker with deep bass', 79.99, 'Accessories'),
    ('Monitor', '27-inch 4K monitor with HDR', 349.99, 'Computers'),
    ('Mechanical Keyboard', 'RGB mechanical keyboard with blue switches', 129.99, 'Accessories'),
    ('Mouse', 'Wireless gaming mouse with customizable buttons', 49.99, 'Accessories'),
    ('External SSD', '1TB external SSD with USB-C', 119.99, 'Storage'),
    ('Router', 'High-speed dual-band WiFi router', 89.99, 'Networking'),
    ('Power Bank', '10000mAh power bank with fast charging', 39.99, 'Accessories'),
    ('Coffee Maker', 'Automatic coffee maker with timer', 69.99, 'Appliances'),
    ('Microwave Oven', '800W microwave with grill function', 159.99, 'Appliances'),
    ('Air Conditioner', '1.5 Ton split AC with inverter technology', 499.99, 'Appliances'),
    ('Refrigerator', 'Double-door fridge with 300L capacity', 699.99, 'Appliances'),
    ('Washing Machine', 'Front-load washing machine with 7kg capacity', 449.99, 'Appliances'),
    ('Smart TV', '55-inch 4K UHD smart TV with HDR', 799.99, 'Electronics'),
    ('Printer', 'All-in-one printer with wireless connectivity', 129.99, 'Office Equipment');

    -- Orders Table 
    INSERT INTO Orders (customer_id, product_id, quantity, order_date, status, payment_method, total_amount)
VALUES
    (1, 3, 2, '2024-02-10', 'Success', 'Credit', 399.98),
    (2, 5, 1, '2024-02-11', 'Pending', 'Debit', 499.99),
    (3, 7, 1, '2024-02-12', 'Success', 'UPI', 79.99),
    (4, 10, 3, '2024-02-13', 'Success', 'Credit', 149.97),
    (5, 15, 1, '2024-02-14', 'Cancel', 'UPI', 159.99),
    (6, 20, 2, '2024-02-15', 'Success', 'Credit', 259.98),
    (7, 9, 1, '2024-02-16', 'Pending', 'Debit', 129.99),
    (8, 12, 2, '2024-02-17', 'Success', 'UPI', 179.98),
    (9, 4, 1, '2024-02-18', 'Cancel', 'Credit', 149.99),
    (10, 8, 1, '2024-02-19', 'Success', 'Debit', 349.99),
    (11, 6, 1, '2024-02-20', 'Pending', 'UPI', 299.99),
    (12, 11, 3, '2024-02-21', 'Success', 'Credit', 359.97),
    (13, 14, 2, '2024-02-22', 'Success', 'Debit', 139.98),
    (14, 18, 1, '2024-02-23', 'Cancel', 'UPI', 449.99),
    (15, 16, 2, '2024-02-24', 'Success', 'Credit', 999.98),
    (16, 1, 1, '2024-02-25', 'Success', 'Debit', 799.99),
    (17, 19, 1, '2024-02-26', 'Pending', 'UPI', 799.99),
    (18, 2, 1, '2024-02-27', 'Success', 'Credit', 599.99),
    (19, 13, 2, '2024-02-28', 'Success', 'Debit', 79.98),
    (20, 17, 1, '2024-02-29', 'Cancel', 'UPI', 699.99);

-- 7. Perform following queries 
-- a. Count the number of products as product_count in each category. 
select category , count(*) as product_count from products group by category;

-- b. Retrieve all products that belong to the 'Electronics' category, have a price between $50 and $500, and whose name contains the letter 'a'. 
select * from products where category = ‘Electronics’ and price between 50 and 500 
and like “%a%”;

--c. Get the top 5 most expensive products in the 'Electronics' category, skipping the first 2.
select * from products where category = ‘Electronics’ order by price desc limit 5 offset 
2;

-- d. Retrieve customers who have not placed any orders. 
select c.* from Customers c left join orders o on c.customer_id = o.customer_id 
where o.customer_id is null;

-- e. Find the average total amount spent by each customer.
select customer_id ,avg(total_amount) as avg_spent from orders group by 
customer_id;

-- f. Get products with Price Less than Average Price of all products.
Select * from products where price< (select avg(price) from products);

-- g. Calculate total quantity of products ordered by each customer
select customer_id , SUM(quantity) as total_quantity from Orders group by 
customer_id;

-- h. List All Orders with Customer Name and Product Name
select Orders.order_id ,Customers.name as customer_name, Products.name as product_name from Orders join Customers on Orders.customer_id = Customers.customer_id join Products on Orders.product_id = Products.product_id

-- i. Find products that have never been ordered 
select * from products where product_id not in (select distinct product_id from Orders);