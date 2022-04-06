async function search_by_slug(request, response){
    const slug = request.query.slug
    
    const { MongoClient } = require('mongodb')

    const mongo_user = process.env.MONGO_DB_USER
    const mongo_password = process.env.MONGO_DB_PASSWORD
    
    const mongo_uri = "mongodb+srv://"+mongo_user+":"+mongo_password+"@cluster0.szi09.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    const client = new MongoClient(mongo_uri, {useNewUrlParser: true})

    async function findOneBySlug(client, slugToSearch){
        await client.connect()
        const result = await client.db("Cluster0").collection("blog_collection").findOne({slug: slugToSearch})
        if (result){
            return result
        } else {
            return "não_encontrado"
        }
    }

    const result = await findOneBySlug(client, slug)

    response.json({
        'slug': result,
        
    })
}

export default search_by_slug