const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Order = require("../models/Order");
const redisClient = require("../redis/redisConnection");

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  const cacheKey = "allUsers";

  try {
    if (redisClient.isOpen) {
      const cachedUsers = await redisClient.get(cacheKey);

      if (cachedUsers) {
        return res.status(200).json({
          message: "All users from Redis",
          users: JSON.parse(cachedUsers),
        });
      }
    }

    const users = await User.find().populate("orders");

    if (redisClient.isOpen) {
      await redisClient.set(cacheKey, JSON.stringify(users),{EX:60});
    }

    res.status(200).json({
      message: redisClient.isOpen ? "All users from MongoDB" : "All users from MongoDB (Redis not connected)",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error user not found",
      error: error.message,
    });
  }
});

router.post("/:userId/orders", async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const order = await Order.create({
      ...req.body,
      user: userId,
    });

    user.orders.push(order._id);
    await user.save();

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating order",
      error: error.message,
    });
  }
});

router.get("/greaterthan", async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $lookup: {
          from: "orders",
          let: {
            userId: "$_id",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$user", "$$userId"],
                },
              },
            },
            {
              $match: {
                totalAmount: {
                  $gt: 500,
                },
              },
            },
          ],
          as: "orders",
        },
      },
    ]);

    res.status(200).json({
      message: "Users with orders above 500",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
});

router.get("/lessthan", async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $lookup: {
          from: "orders",
          let: {
            userId: "$_id",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$user", "$$userId"],
                },
              },
            },
            {
              $match: {
                totalAmount: {
                  $lt: 500,
                },
              },
            },
          ],
          as: "orders",
        },
      },
    ]);
    res.status(200).json({
      message: "Users with orders above 500",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
});
module.exports = router;
