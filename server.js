const express = require("express");
const fetch = require("cross-fetch");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.port || 3000;

app.get("/api/restaurants", (req, res) => {
    const { lat, lng } = req.query;
    console.log(req.query);

    const URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

    fetch(URL, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        },
    })
        .then((res) => {
            if (res.statsu >= 400) {
                throw new Error("Bad response from server");
            }
            return res.json();
        })
        .then((data) => {

            res.json(data);
        })
        .catch((error) => console.log(error));
});

app.get("/api/restaurant/menu", (req, res) => {
    const { lat, lng, menuId } = req.query;
    const URL = `https://www.swiggy.com/dapi/menu/v4/full?lat=${lat}4&lng=${lng}&menuId=${menuId}`;

    fetch(URL, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        },
    })
        .then((res) => {
            if (res.status >= 400) {
                throw new Error("Bad request from erver");
            }
            return res.json();
        })
        .then((data) => res.json(data))
        .catch((error) => console.log(error));
});

app.get("/", (req, res) => {
    res.json({ "message:": "Server is up and running.." });
});

app.listen(port, () => {
    console.log(`Sever running at port : ${port}`);
});
