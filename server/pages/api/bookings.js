"use strict";
(() => {
var exports = {};
exports.id = 855;
exports.ids = [855];
exports.modules = {

/***/ 2993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    if (req.method === "POST") {
        const { checkInDate , checkOutDate , numberOfGuests , roomType  } = req.body;
        // Save booking data to database or external service
        console.log("Received booking:", req.body);
        // Connect to MongoDB
        //const client = await MongoClient.connect(process.env.MONGODB_URI);
        // const db = client.db(process.env.MONGODB_DB);
        // Insert booking data into collection
        // const bookingsCollection = db.collection('bookings');
        //const result = await bookingsCollection.insertOne({
        //checkInDate,
        //checkOutDate,
        //numberOfGuests,
        // roomType,
        // });
        // Close database connection
        //client.close();
        res.status(200).json({
            message: "Booking successful!"
        });
    } else {
        res.status(405).json({
            message: "Method not allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2993));
module.exports = __webpack_exports__;

})();