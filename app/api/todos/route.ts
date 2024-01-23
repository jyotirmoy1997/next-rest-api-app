import { NextResponse } from "next/server";
import axios from "axios"


export async function GET() {
     const data : Todo[] = await axios.get("https://jsonplaceholder.typicode.com/todos")
    console.log(data)
    return NextResponse.json({ msg : "Dummy"})
}

export async function PUT(request : Request){
    const { userId, id, title, completed} : Todo = await request.json()
    console.log(userId, id, title, completed)
    const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { userId : userId, id : id, title : title, completed : completed})
    const updatedTodo : Todo = res.data
    return NextResponse.json({ msg : updatedTodo})
}

export async function POST(request : Request){
    const { userId, title } : Partial<Todo> = await request.json()
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, { userId, title, completed : false})
    const newTodo : Todo = res.data
    return NextResponse.json({ msg : newTodo})
}

export async function DELETE(request : Request){
    const { id } : Partial<Todo> = await request.json()
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return NextResponse.json({ msg : "Deleted"})
}