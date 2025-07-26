import mongoose from "mongoose";

const thingSchema = mongoose.Schema({
// objets qui seront implémentés en DB (préalablement créée depuis l'interface de Atlas)
title: { type: String, required:true }, // = 1 colonne en DB
article: { author: String, title:String, nb:number, content: String },
comment: { author: String }
// id géré automatiquement en DB
// articleList : {article: [...]};
})