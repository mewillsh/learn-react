import { Client, Query, TablesDB, Storage, ID} from "appwrite";
import conf from "../../conf/conf";
class configObj {
    client = new Client()
    tableDb
    storage
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.tableDb = new TablesDB(this.client)
        this.storage = new Storage(this.client)
    }
    async createPost(slug, { title, content, featuredImage, status, userId }) {
        try {
            let result = await this.tableDb.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title: title,
                    content: content,
                    featuredImage: featuredImage,
                    status: status,
                    userId: userId
                }
            })
            console.log("DB insertion Result: ",result)
            return result
        } catch (error) {
            console.log("DB insertion Error: ",error)
            return null
        }
    }

    async getPost(slug) {
        try {
            let result = await this.tableDb.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
            console.log("DB fetch Post Result: ",result)
            return result
        } catch (error) {
            console.log("DB fetch Post Error: ",error)
            return null
        }
    }

    async getAllPost() {
        try {
            let result = await this.tableDb.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries : [Query.equal("status","active")]
            })
            console.log("DB fetch Post Results: ",result)
            return result
        } catch (error) {
            console.log("DB fetch Post Error: ",error)
            return null
        }
    }    

    async UpdatePost(slug, { title, content, featuredImage, status }) {
        try {
            let result = await this.tableDb.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title: title,
                    content: content,
                    featuredImage: featuredImage,
                    status: status
                }
            })
            console.log(`DB post Updation Result: ${result}`)
            return result
        } catch (error) {
            console.log(`DB post Updation Error ${error}`)
            return null
        }


    }

    async DeletePost(slug) {
        try {
            let result = await this.tableDb.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
            console.log(`DB post Deleted Result: ${result}`)
            return result
        } catch (error) {
            console.log(`DB post Deletion Error ${error}`)
            return null
        }

    }   

    async UploadPostImage(file){
        try {
            let result = await this.storage.createFile({
                bucketId:conf.appwriteBucketId,
                fileId:ID.unique(),
                file:file
            })
            console.log("Uploaded File MetaData",result)
            return result
        } catch (error) {
            console.log("Uploaded File Result",error)
        }
    }

    async DeletePostImage(fileId){
        try {
            let result = await this.storage.deleteFile({
                bucketId:conf.appwriteBucketId,
                fileId:fileId
            })
            return result
        } catch (error) {
            console.log("DeletePostImage :: config.js Error",error)
        }
    }

    async PreviewPostImage(fileId){
        try {
            let result = await this.storage.getFilePreview({
                bucketId:conf.appwriteBucketId,
                fileId:fileId,
                quality: 70,
                output: 'auto'
            })
            console.log("PreviewPostImage :: config Returned Successfully")
            return result
        } catch (error) {
            console.log("PreviewPostImage :: config Error")
        }
    }
}