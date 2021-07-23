const { URL, URLSearchParams } = require('url');
const fetch = require('node-fetch');
const { json } = require('express');
require('dotenv').config();

const MapSearch = async (latitude, longitude) => {

    let shopList = []

    const param1 = {
        location: latitude.toString() + ',' + longitude.toString(),
        type: 'restaurant',
        key: process.env.API_KEY,
        radius: 2000
    }

    var url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json?')

    url.search = new URLSearchParams(param1)

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json()
        return data
    }

    let data = await fetchData();
    shopList.push(data.results)
    return shopList

}

module.exports = MapSearch