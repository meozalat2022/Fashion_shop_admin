import Collection from "@/lib/models/Collection";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest)=>{
    try {
        const {userId} = auth()
        if(!userId){
            return new NextResponse("Not authorized", {status: 403})
        }

        await connectToDB()
        const {title, description, image} = await req.json()
    const existingCollection = await Collection.findOne({title})
    if(existingCollection){
        return new NextResponse("Collection already exists", {status: 400})

    }
    if(!title || !image){
        return new NextResponse("Title and Image are required", {status: 400})
    }

    const newCollection = await Collection.create({
        title,
        description, image, userId
    })

    await newCollection.save()
    return NextResponse.json(newCollection, {status: 200});
    } catch (error) {
        console.log("[collections_POST]", error)
        return new NextResponse("Internal service error", {status: 500})
    }
}