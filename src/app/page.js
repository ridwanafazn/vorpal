import Event from "./model/Event";
import dbConnect from "./utils/dbConnect";
import { redirect } from "next/navigation";

export default function Home() {
  async function newEvent(data) {
    "use server";
    let name = data.get("name")?.valueOf();
    let category = data.get("category")?.valueOf();
    let description = data.get("description")?.valueOf();
    let startDate = data.get("startDate")?.valueOf();
    let endDate = data.get("endDate")?.valueOf();
    let eligibility = data.get("eligibility")?.valueOf();
    let location = data.get("location")?.valueOf();
    let contact = data.get("contact")?.valueOf();
    let website = data.get("website")?.valueOf();
    let instagram = data.get("instagram")?.valueOf();
    let cost = data.get("cost")?.valueOf();
    let form = data.get("form")?.valueOf();

    try {
      dbConnect();
      let newEvent = new Event({
        name,
        category,
        description,
        startDate,
        endDate,
        eligibility,
        location,
        contact,
        website,
        instagram,
        cost,
        form,
      });
      await newEvent.save();
      console.log(newEvent);
    } catch (e) {
      console.log(e);
    }
    redirect("/show");
  }

  return (
    <div className="w-full h-screen py-24 py-28">
      <h1 className="font-bold text-center">Create Event</h1>
      <div className="flex justify-center">
        <form action={newEvent} className="text-xl text-black font-mono w-1/3">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-slate-200 h-10 p-3 rounded-lg w-[100%]"
          />
          <label>Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            className="bg-slate-200 rounded-lg h-10 p-3 w-[100%]"
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            className="bg-slate-200 h-10 rounded-lg p-3 w-[100%]"
          />
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            className="bg-slate-200 h-10 rounded-lg p-3 w-[100%]"
          />
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            className="bg-slate-200 h-10 rounded-lg p-3 w-[100%]"
          />
          <label>Eligibility:</label>
          <input
            type="text"
            name="eligibility"
            id="eligibility"
            className="bg-slate-200 h-10 rounded-lg p-3 w-[100%]"
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            className="bg-slate-200 h-10 rounded-lg p-3 w-[100%]"
          />
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            id="contact"
            className="bg-slate-200 h-10 rounded-lg p-3 w-[100%]"
          />
          <label>Website:</label>
          <input
            type="text"
            name="website"
            id="website"
            className="bg-slate-200 h-10 rounded-lg p-3 w-[100%]"
          />
          <label>Instagram:</label>
          <input
            type="text"
            name="instagram"
            id="instagram"
            className="bg-slate-200 h-10 rounded-lg p-3 w-[100%]"
          />
          <label>Cost:</label>
          <input
            type="text"
            name="cost"
            id="cost"
            className="bg-slate-200 h-10 rounded-lg p-3 w-[100%]"
          />
          <label>Form:</label>
          <input
            type="text"
            name="form"
            id="form"
            className="bg-slate-200 h-10 rounded-lg p-3 w-[100%]"
          />
          <button
            type="submit"
            className="bg-black text-white mt-3 h-8 w-20 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
