import { redirect } from "next/navigation";
import dbConnect from "@/app/utils/dbConnect";
import Event from "@/app/model/Event";
import { toast } from "react-toastify";

async function page({ params }) {
  dbConnect();
  const event = await Event.findOne({ _id: params.id });

  async function updateEvent(data) {
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

    let updateE = await Event.findByIdAndUpdate(
      { _id: params.id },
      {
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
      }
    );

    console.log(updateE);
    redirect("/show");
  }

  return (
    <div>
      <div className="flex justify-center">
        <form
          onSubmit={updateEvent}
          className="text-xl mt-20 text-black font-mono w-1/3"
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={event.name}
            className="bg-slate-200 h-10 p-3 rounded-lg w-[100%]"
            required
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            defaultValue={event.category}
            className="bg-slate-200 h-10 p-3 rounded-lg w-[100%]"
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            defaultValue={event.description}
            className="bg-slate-200 p-3 rounded-lg w-[100%]"
            required
          />

          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            defaultValue={event.startDate}
            className="bg-slate-200 h-10 p-3 rounded-lg w-[100%]"
            required
          />

          <button
            type="submit"
            className="bg-black text-white mt-4 h-8 w-20 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
