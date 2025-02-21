import { writeFile } from "fs/promises"
import { join } from "path"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const formData = await req.formData()
        const file = formData.get("image")

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const filePath = join(process.cwd(), "public/images", file.name)

        await writeFile(filePath, buffer)

        return NextResponse.json({ imageUrl: `/images/${file.name}` }, { status: 200 })
    } catch (error) {
        console.error("Upload error:", error)
        return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
    }
}
