import React from "react";

const EventHub = () => {
  const events = Array(15)
    .fill(0)
    .map((_, index) => ({
      id: index + 1,
      title: `Event Title ${index + 1}`,
      date: `2024-11-${index + 10}`,
      time: "6:00 PM",
      location: "Toronto, ON",
      description: `This is a description for Event ${index + 1}. It provides details about the event's purpose, activities, and target audience.`,
      image: `https://via.placeholder.com/150?text=Event+${index + 1}`,
    }));

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="w-full bg-main-color py-4 flex items-center justify-between px-8">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search event type"
          className="h-10 w-1/3 px-4 text-sm placeholder-gray-400 text-primary-text-color border border-gray-300 rounded"
        />
        {/* Location */}
        <button className="h-10 w-1/4 px-4 text-sm text-gray-400 bg-white rounded flex items-center justify-center">
          <span className="material-icons-outlined text-lg mr-2">location_on</span>
          Toronto
        </button>
      </div>

      {/* Events Section */}
      <div className="px-8 py-4">
        <h2 className="text-main-color font-semibold text-lg mb-4">Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded overflow-hidden cursor-pointer"
              onClick={() => console.log("Event clicked:", event)}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-primary-text-color font-bold text-base">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventHub;
