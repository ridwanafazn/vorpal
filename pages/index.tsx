import Head from 'next/head'
import { useState } from 'react'
import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'

import "tailwindcss/tailwind.css"
import NewTodoForm from '../components/NewTodoForm'
import Todos from '../components/Todos'

export async function getServerSideProps(context: any) {
  try {
    // await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    const client = await clientPromise
    const db = client.db("todo")
    const collection = db.collection("todos")

    const todos = await collection.find({}).toArray()
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true, todos: JSON.parse(JSON.stringify(todos)) },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Home({
  isConnected,
  todos
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [allTodos, setAllTodos] = useState(todos || [])

  return (
    <div className="container">
      <Head>
        <title>Vorpalskie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container bg-white rounded shadow p-6 m-4 w-full lg:w-3/4">
        <h1 className="text-2xl font-bold text-grey-darkest">
          My Event
        </h1>
        {isConnected ? (
          <>
            <h2 className="text-green-600 pt-4">
              Connect to Mongo success
            </h2>
            <NewTodoForm setAllTodos={setAllTodos} /> 
            <Todos setAllTodos={setAllTodos} allTodos={allTodos} />
          </>
        ) : (
            <h2 className="text-red-600 pt-4">
              Connect to Mongo failed
          </h2>
        )}
      </main>
    </div>
  )
}
