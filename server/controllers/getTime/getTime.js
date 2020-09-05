const moment = require('moment');

const getTime = (req, res, next) => {
    const timeResponse = {
        properties: {
            epoch: {
                description: moment().unix(),
                type: "number"
            }
        },
        required: ["epoch"],
        type: "object"
    };
    res.status(200).send(timeResponse);
};

module.exports = { getTime };