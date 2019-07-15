// Admin end points for demo.
// These end points are used in the demo to fast forward or reset the 30 day
// progress on the challenge.
var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function (app) {

    // Run the admin reset scripts.
    // This end point will reset the 30 day counter and reset the metrics entries.
    app.get("/admin/reset", function (req, res) {
        console.log("/admin/reset");

        // Remove the record from the spirittrackers table.
        console.log("Delete all records from spirittrackers table.");
        res.write("Delete all records from spirittrackers table.\n");

        // Remove all records from the spirittrackers table.
        db.SpiritTracker.destroy({
            where: {}
        }).then(function (results) {
            console.log("All records deleted from spirittrackers table.");
            res.write("All records deleted from spirittrackers table.\n");

            // Remove all records from the metrics table.
            db.Metric.destroy({
                where: {}
            }).then(function (results) {
                console.log("All metrics deleted from metrics table.");
                res.write("All metrics deleted from metrics table.\n");

                // Insert new default metrics.
                db.Metric.bulkCreate([
                    { day_id: 1, createdAt: Date(), updatedAt: Date() },
                    { day_id: 2, createdAt: Date(), updatedAt: Date() },
                    { day_id: 3, createdAt: Date(), updatedAt: Date() },
                    { day_id: 4, createdAt: Date(), updatedAt: Date() },
                    { day_id: 5, createdAt: Date(), updatedAt: Date() },
                    { day_id: 6, createdAt: Date(), updatedAt: Date() },
                    { day_id: 7, createdAt: Date(), updatedAt: Date() },
                    { day_id: 8, createdAt: Date(), updatedAt: Date() },
                    { day_id: 9, createdAt: Date(), updatedAt: Date() },
                    { day_id: 10, createdAt: Date(), updatedAt: Date() },
                    { day_id: 11, createdAt: Date(), updatedAt: Date() },
                    { day_id: 12, createdAt: Date(), updatedAt: Date() },
                    { day_id: 13, createdAt: Date(), updatedAt: Date() },
                    { day_id: 14, createdAt: Date(), updatedAt: Date() },
                    { day_id: 15, createdAt: Date(), updatedAt: Date() },
                    { day_id: 16, createdAt: Date(), updatedAt: Date() },
                    { day_id: 17, createdAt: Date(), updatedAt: Date() },
                    { day_id: 18, createdAt: Date(), updatedAt: Date() },
                    { day_id: 19, createdAt: Date(), updatedAt: Date() },
                    { day_id: 20, createdAt: Date(), updatedAt: Date() },
                    { day_id: 21, createdAt: Date(), updatedAt: Date() },
                    { day_id: 22, createdAt: Date(), updatedAt: Date() },
                    { day_id: 23, createdAt: Date(), updatedAt: Date() },
                    { day_id: 24, createdAt: Date(), updatedAt: Date() },
                    { day_id: 25, createdAt: Date(), updatedAt: Date() },
                    { day_id: 26, createdAt: Date(), updatedAt: Date() },
                    { day_id: 27, createdAt: Date(), updatedAt: Date() },
                    { day_id: 28, createdAt: Date(), updatedAt: Date() },
                    { day_id: 29, createdAt: Date(), updatedAt: Date() },
                    { day_id: 30, createdAt: Date(), updatedAt: Date() },
                ]).then(function (results) {
                    console.log("Done creating metrics");
                    res.write("Done creating metrics\n");
                    res.end();
                });
            });
        });
    });

    // Run the admin fforward scripts.
    // This end point will fast forward the challenge to the end of the 30 days.
    app.get("/admin/fforward", function (req, res) {
        console.log("/admin/fforward");

        // Remove the record from the spirittrackers table.
        console.log("Delete all records from spirittrackers table.");
        res.write("Delete all records from spirittrackers table.\n");
        db.SpiritTracker.destroy({
            where: {}
        }).then(function (results) {
            console.log("All records deleted from spirittrackers table.");
            res.write("All records deleted from spirittrackers table.\n");

            console.log("Update counter on spirittrackers table.");
            res.write("Update counter on spirittrackers table.\n");
            let putObj = {
                start_date: Date(),
                checkin_counter: 30,
                createdAt: Date(),
                updatedAt: Date()
            };

            db.SpiritTracker.create(putObj)
                .then(function (results) {
                    console.log("Counter updated in spirittrackers table.");
                    res.write("Counter updated in spirittrackers table.\n");

                    // Remove all records from the metrics table.
                    console.log("Remove all records from metrics table.");
                    res.write("Remove all records from metrics table.\n");

                    db.Metric.destroy({
                        where: {
                            day_id: {
                              [Sequelize.Op.ne]: 1
                            }
                          }
                    }).then(function (results) {
                        console.log("All metrics deleted from metrics table.");
                        res.write("All metrics deleted from metrics table.\n");

                        // Insert new default metrics.
                        db.Metric.bulkCreate([
                            //{ day_id: 1, rbpm: 110, bmi: 26, blog: "This is too hard!", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 2, rbpm: 110, bmi: 26, blog: "This is too hard!", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 3, rbpm: 110, bmi: 26, blog: "I need a beer!", mood: 0, createdAt: Date(), updatedAt: Date() },
                            //{ day_id: 4, rbpm: 108, bmi: 25.5, blog: "Still difficult.", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 5, rbpm: 108, bmi: 25.5, blog: "Still difficult.", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 6, rbpm: 108, bmi: 25.5, blog: "Still difficult.", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 7, rbpm: 108, bmi: 25.5, blog: "Still difficult.", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 8, rbpm: 108, bmi: 25.5, blog: "Still difficult.", mood: 3, createdAt: Date(), updatedAt: Date() },
                            { day_id: 9, rbpm: 105, bmi: 24, blog: "Still moody.", mood: 3, createdAt: Date(), updatedAt: Date() },
                            { day_id: 10, rbpm: 105, bmi: 24, blog: "I wonder what is happening on Game of Thrones ...", mood: 3, createdAt: Date(), updatedAt: Date() },
                            //{ day_id: 11, rbpm: 105, bmi: 24, blog: "Still moody.", mood: 3, createdAt: Date(), updatedAt: Date() },
                            //{ day_id: 12, rbpm: 105, bmi: 24, blog: "Still moody.", mood: 3, createdAt: Date(), updatedAt: Date() },
                            { day_id: 13, rbpm: 100, bmi: 23, blog: "Feeling more upbeat.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 14, rbpm: 100, bmi: 23, blog: "Feeling more upbeat.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 15, rbpm: 100, bmi: 23, blog: "Feeling more upbeat.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 16, rbpm: 100, bmi: 23, blog: "Feeling more upbeat.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 17, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 18, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 19, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 20, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 21, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 22, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 23, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 24, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 25, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 26, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 27, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 28, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 29, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 30, rbpm: 90, bmi: 20, blog: "Bring on the next challenge!!", mood: 1, createdAt: Date(), updatedAt: Date() },
                        ]).then(function (results) {
                            console.log("Done creating metrics");
                            res.write("Done creating metrics\n");
                            res.end();
                        });
                    });
                });
        });
    });

    // Run the admin test scripts.
    // Load full test data to metrics.
    app.get("/admin/test", function (req, res) {
        console.log("/admin/test");

        // Remove the record from the spirittrackers table.
        console.log("Delete all records from spirittrackers table.");
        res.write("Delete all records from spirittrackers table.\n");
        db.SpiritTracker.destroy({
            where: {}
        }).then(function (results) {
            console.log("All records deleted from spirittrackers table.");
            res.write("All records deleted from spirittrackers table.\n");

            console.log("Update counter on spirittrackers table.");
            res.write("Update counter on spirittrackers table.\n");
            let putObj = {
                start_date: Date(),
                checkin_counter: 30,
                createdAt: Date(),
                updatedAt: Date()
            };

            db.SpiritTracker.create(putObj)
                .then(function (results) {
                    console.log("Counter updated in spirittrackers table.");
                    res.write("Counter updated in spirittrackers table.\n");

                    // Remove all records from the metrics table.
                    console.log("Remove all records from metrics table.");
                    res.write("Remove all records from metrics table.\n");

                    db.Metric.destroy({
                        where: {}
                    }).then(function (results) {
                        console.log("All metrics deleted from metrics table.");
                        res.write("All metrics deleted from metrics table.\n");

                        // Insert new default metrics.
                        db.Metric.bulkCreate([
                            { day_id: 1, rbpm: 110, bmi: 26, blog: "This is too hard!", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 2, rbpm: 110, bmi: 26, blog: "This is too hard!", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 3, rbpm: 110, bmi: 26, blog: "I need a beer.", mood: 0, createdAt: Date(), updatedAt: Date() },
                            //{ day_id: 4, rbpm: 108, bmi: 25.5, blog: "Still difficult.", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 5, rbpm: 108, bmi: 25.5, blog: "Still difficult.", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 6, rbpm: 108, bmi: 25.5, blog: "Still difficult.", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 7, rbpm: 108, bmi: 25.5, blog: "Still difficult.", mood: 0, createdAt: Date(), updatedAt: Date() },
                            { day_id: 8, rbpm: 108, bmi: 25.5, blog: "Still difficult.", mood: 3, createdAt: Date(), updatedAt: Date() },
                            { day_id: 9, rbpm: 105, bmi: 24, blog: "Still moody.", mood: 3, createdAt: Date(), updatedAt: Date() },
                            { day_id: 10, rbpm: 105, bmi: 24, blog: "I wonder what is happening on Game of Thrones ...", mood: 3, createdAt: Date(), updatedAt: Date() },
                            //{ day_id: 11, rbpm: 105, bmi: 24, blog: "Still moody.", mood: 3, createdAt: Date(), updatedAt: Date() },
                            //{ day_id: 12, rbpm: 105, bmi: 24, blog: "Still moody.", mood: 3, createdAt: Date(), updatedAt: Date() },
                            { day_id: 13, rbpm: 100, bmi: 23, blog: "Feeling more upbeat.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 14, rbpm: 100, bmi: 23, blog: "Feeling more upbeat.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 15, rbpm: 100, bmi: 23, blog: "Feeling more upbeat.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 16, rbpm: 100, bmi: 23, blog: "Feeling more upbeat.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 17, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 18, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 19, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 20, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 21, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 22, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 23, rbpm: 98, bmi: 22, blog: "This is not so bad.", mood: 2, createdAt: Date(), updatedAt: Date() },
                            { day_id: 24, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 25, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 26, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 27, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 28, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 29, rbpm: 95, bmi: 22, blog: "I feel great!", mood: 1, createdAt: Date(), updatedAt: Date() },
                            { day_id: 30, rbpm: 90, bmi: 20, blog: "Bring on the next challenge!!", mood: 1, createdAt: Date(), updatedAt: Date() },
                        ]).then(function (results) {
                            console.log("Done creating metrics");
                            res.write("Done creating metrics\n");
                            res.end();
                        });
                    });
                });
        });
    });

};
