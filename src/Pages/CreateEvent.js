import React, { useState } from "react";

const CreateNewEvent = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: "",
  });

  const [events, setEvents] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, eventDetails]); // Add new event to the list
    setIsFormVisible(false); // Hide form after submission
  };

  return (
    <div className="w-full">
      {/* Add New Event Button */}
      <button
        onClick={() => setIsFormVisible(true)}
        className="bg-main text-white px-6 py-3 rounded-lg mb-6"
      >
        Add New Event
      </button>

      {/* Form Component */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-primary-text-color font-semibold mb-4">
            Create New Event
          </h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-primary-text-color mb-2">
              Event Title
            </label>
            <input
              type="text"
              name="title"
              value={eventDetails.title}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
              placeholder="Event Title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-primary-text-color mb-2">
              date
            </label>
            <input
              type="date"
              name="date"
              value={eventDetails.date}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-primary-text-color mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={eventDetails.location}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
              placeholder="Event Location"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-primary-text-color mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={eventDetails.description}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
              placeholder="Event Description"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-primary-text-color mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={eventDetails.image}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
              placeholder="Image URL"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-main text-white px-6 py-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      )}

      {/* My Events Header */}
      <h2 className="text-main-color font-semibold text-xl mt-8 mb-4">My Events</h2>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded overflow-hidden cursor-pointer"
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
  );
};

export default CreateNewEvent;
