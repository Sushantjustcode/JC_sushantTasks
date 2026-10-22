const Category = require("../models/category.model");

const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = new Category({ name, description });
        await category.save();
        return res.status(201).json({ message: "Category created", data: category });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

const listCategories = async (req, res) => {
    try {
        const categories = await Category.find({ isDeleted: false }).sort({ name: 1 });
        return res.status(200).json({ data: categories });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        if (!category || category.isDeleted) {
            return res.status(404).json({ message: "Category not found" });
        }
        return res.status(200).json({ data: category });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const category = await Category.findByIdAndUpdate(id, updates, { new: true });
        if (!category) return res.status(404).json({ message: "Category not found" });
        return res.status(200).json({ message: "Category updated", data: category });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        if (!category) return res.status(404).json({ message: "Category not found" });
        return res.status(200).json({ message: "Category deleted (soft)", data: category });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createCategory,
    listCategories,
    getCategory,
    updateCategory,
    deleteCategory,
};
