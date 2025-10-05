import mongoose from "mongoose";

const thingSchema = new mongoose.Schema({
// objets qui seront implémentés en DB (préalablement créée depuis l'interface de Atlas)
title: { type: String, required:true }, // = 1 colonne en DB
content: { type:String },
comment: { type:String }
// id géré automatiquement en DB
// articleList : {article: [...]};
})
const Thing = mongoose.model("Thing", thingSchema)

export default Thing