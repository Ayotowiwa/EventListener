import React from 'react';

function EventList({ events }) {
  return (
    <div className="event-list">
      <h2 className="text-xl font-semibold mb-4">Events Around You</h2>
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="event-item p-4 border rounded-lg mb-4 shadow-sm">
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p className="text-gray-700">{event.description}</p>
            <p className="text-gray-500"><strong>Location:</strong> {event.location}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No events available.</p>
      )}
    </div>
  );
}

export default EventList;
