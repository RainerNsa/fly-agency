import { Client, Account, Databases, Storage } from "appwrite";

export const appwriteConfig = {
    endpointUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID, 
    bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    tripCollectionId: import.meta.env.VITE_APPWRITE_TRIP_COLLECTION_ID,
}

const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);
    

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { account, database, client, storage };