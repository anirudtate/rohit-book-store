import mongoose from 'mongoose';
import dotenv from 'dotenv';
import db from './utils/db.js';
import data from './utils/data.js';
import Product from './models/Product.js';

dotenv.config();

const seedData = async () => {
  try {
    await db.connect();
    await Product.deleteMany({}); // Clear existing products
    await Product.insertMany(data.products);
    console.log('Data seeded successfully');
    await db.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
