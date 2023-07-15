import { createClient, groq } from "next-sanity";

export async function getProject(){
    const client = createClient({
        projectId : 'YOUR PROJECT ID',
        dataset : 'production',
        apiVersion : 'YOUR API VERSION',
        useCdn : false //optional
    })

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug" : slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

