import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://<db_username>:<db_password>@cluster0.wsimzoo.mongodb.net/?appName=Cluster0");
export const db = client.db();
export default client;