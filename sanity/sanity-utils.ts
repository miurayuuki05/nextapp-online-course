import { createClient, groq } from "next-sanity";

export async function getProject(){
    const client = createClient({
        projectId : 'onczd6rt',
        dataset : 'production',
        apiVersion : '2023-06-16',
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

