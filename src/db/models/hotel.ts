import { CreateOptions, CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

//declare simply lets us set up by declaring class variables, it informs ts compiler about the class variable Hotel has.
class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>>{
    declare id: CreationOptional<number>
    declare name: string
    declare address: string
    declare location: string
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>
    declare rating: number
    declare ratingCount: number 
}

// init - the init function tells us that the Model (any model - hotel, user etc) is going to map with which table in the db and each class var of the model in going to map with which column in the db.

Hotel.init({
     id: {
        type: "INTEGER",
        autoIncrement: true,
        primaryKey: true
     },
     name: {
        type: "STRING",
        allowNull: false
     },
     address:{
        type: "STRING",
        allowNull: false
     },
     location: {
        type: "STRING",
        allowNull: false
     },
     createdAt: {
        type: "DATE",
        defaultValue: new Date()
     },
     updatedAt: {
        type: "DATE",
        defaultValue: new Date()
     },
     rating: {
        type: "FLOAT",
        defaultValue: null
     },
     ratingCount: {
        type: "INTEGER",
        defaultValue: null
     }
},
{
    tableName: "hotels",
    sequelize: sequelize,
    underscored: true,
    timestamps: true
})

export default Hotel;