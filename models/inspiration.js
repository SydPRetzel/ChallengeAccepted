// SQL model for curated inspirational quote table.
module.exports = function (sequelize, DataTypes) {
    var Inspiration = sequelize.define("Inspiration", {
        day_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 30
            }
        },
        quote: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        author: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "Unknown",
            validate: {
                notEmpty: true
            }
        },
        image_url: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
    return Inspiration;
};
