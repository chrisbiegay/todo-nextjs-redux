import Head from "next/head"
import React from "react";
import {AddTodo} from "../features/todos/addTodo";
import {ToDosList} from "../features/todos/todosList";

/**
 * This component is rendered by Next.js for the root URI path.
 */
export default function Home() {
  return (
    <div>
      <Head>
        <title>To-Do App with Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AddTodo/>
        <hr/>
        <ToDosList heading="To-Dos"/>
      </main>
    </div>
  )
}
