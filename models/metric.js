// SQL model for user input daily metrics.
module.exports = function (sequelize, DataTypes) {
    var Metric = sequelize.define("Metric", {
        day_id: DataTypes.INTEGER,
        rbpm: DataTypes.INTEGER,
        bmi: DataTypes.FLOAT,
        blog: DataTypes.TEXT,
        mood: DataTypes.INTEGER
    });
    return Metric;
};
