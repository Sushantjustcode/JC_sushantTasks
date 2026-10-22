const express = require("express");
const router = express.Router();

const User = require("../models/User");


router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            message: "User created successfully",
            user: user,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message,
        });
    }
});


router.get("/", async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;

        const skip = (page - 1) * limit;
        const search = req.query.search || "";

        const users = await User.find({
            name: {
                $regex: search,
                $options: "i"
            }
        })
            .skip(skip)
            .limit(limit);



        res.json({
            page: page,
            limit: limit,
            users: users,
            search: search
        })

    } catch (error) {
        res.status(500).json({
            message: "Error getting users",
            error: error.message,
        });
    }
});

router.get("/filter",async(req, res)=>{
    try{
        const city = req.query.city;
        const users = await User.find({
            city:city
        });
        res.json({
            city:city,
            users:users
        })
    }catch(error){
        res.status(500).json({
            message:"Error filtering User",
            error:error.message
        })
    }
});

router.get("/sortasc", async(req, res)=>{

        try{
            const users = await User.find().sort({
                salary: 1
            });
            res.status(201).json({
                message:"salary in Acending order",
                users:users
            })
        }catch(error){
            res.status(500).json({
                message: "Error filtering User",
                error: error.message
            })
        }
})

router.get("/sortdec", async (req, res) => {

    try {
       const result = await User.aggregate([
        {
            $sort:{
                salary:-1
            }
        }
       ])
        res.status(201).json({
            message: "salary in Acending order",
            result:result
        })
    } catch (error) {
        res.status(500).json({
            message: "Error filtering User",
            error: error.message
        })
    }
})

router.get("/aggregate",async(req,res)=>{
    try{

            const result = await User.aggregate([
                {
                    $group: {
                        _id: "$city",
                        totalUser:{
                            $sum : 1
                        },
                        averageSalary:{
                            $avg:"$salary"
                        },
                        highestSalary:{
                            $max:"$salary"
                        },
                        lowestSalary:{
                            $min:"$salary"
                        }
                    }
                },
               {$sort:  {
                    averageSalary:-1
                }
            }
            ]);

            res.json({
                result:result
            });

    }catch(error){
        res.status(500).json({
            message: "error occoured",
            error:error.message
        })
    }
});


module.exports = router;
