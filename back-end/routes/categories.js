const express = require("express");
const router = express.Router();
const axios = require("axios");
const { handleError, APIURL } = require("../utils/utils");

const API = axios.create({ baseURL: APIURL })

router.get("/:id", async (req, res) => {
    try {
        const response = await API.get(`categories/${req.params.id}`);
        const { path_from_root } = response.data;
        const categories = path_from_root.map(category => category.name);
        res.json(categories);
    }
    catch (error) {
        handleError(error);
    }
});

module.exports = router;