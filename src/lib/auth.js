import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://online-library:p2U3zMIVe1YjvyWV@cluster0.wsimzoo.mongodb.net/?appName=Cluster0");
const db = client.db("online-library");

export const auth = betterAuth({
    database: mongodbAdapter(db,{client}),
    emailAndPassword:{
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
    user: {
        additionalFields: {
            image: { type: "string" },
        }
    }
});