import React from "react";
import dbConnect from "../utils/dbConnect";
import Event from "../model/Event";
import Link from "next/link";
import { redirect } from "next/navigation";

async function show() {
  dbConnect();
  const events = await Event.find();

  async function deleteEvent(data) {
    "use server";
    let id = JSON.parse(data.get("id")?.valueOf());
    await Event.deleteOne({ _id: id });
    redirect("/show");
  }

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white text-center my-10">
        List of Events
      </h2>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-50 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nama Event
            </th>
            <th scope="col" className="px-6 py-3">
              Kategori
            </th>
            <th scope="col" className="px-6 py-3">
              Waktu
            </th>
            <th scope="col" className="px-6 py-3">
              Biaya
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr
              key={event._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td>{event.name}</td>
              <td>{event.category}</td>
              <td>
                {event.startDate
                  ? event.startDate.toLocaleString()
                  : "Not available"}
              </td>
              <td>{event.cost}</td>
              <td className="flex space-x-2">
                <Link href={`/detail/${event._id}`}>
                  <button className="text-white bg-blue-600 h-8 w-20 rounded-md">
                    Detail
                  </button>
                </Link>
                <Link href={`/edit/${event._id}`}>
                  <button className="text-white bg-green-600 h-8 w-20 rounded-md">
                    Edit
                  </button>
                </Link>
                <form action={deleteEvent}>
                  <input
                    type="hidden"
                    name="id"
                    id="id"
                    value={JSON.stringify(event._id)}
                  />
                  <button className="text-white bg-red-600 h-8 w-20 rounded-md">
                    Hapus
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default show;
