import React, { useEffect, useState } from "react";

type Event = {
  id: string;
  datetime: string;
  venue: {
    name: string;
    city: string;
    country: string;
  };
  url: string;
};

type BandsintownTourProps = {
  artistName: string; // Name of the artist
  apiKey: string; // Bandsintown API key
};

const BandsintownTour: React.FC<BandsintownTourProps> = ({
  artistName,
  apiKey,
}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${encodeURIComponent(
            artistName
          )}/events?app_id=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [artistName, apiKey]);

  if (loading) {
    return <p>Loading tour dates...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (events.length === 0) {
    return <p>No upcoming events found for {artistName}.</p>;
  }

  return (
    <div className="bandsintown-tour">
      <h2 className="text-4xl font-extrabold mb-6 text-white text-center">
        Upcoming Tour Dates
      </h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-md"
          >
            <p className="text-lg font-bold">{event.venue.name}</p>
            <p>
              {event.venue.city}, {event.venue.country}
            </p>
            <p>{new Date(event.datetime).toLocaleDateString()}</p>
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Details
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BandsintownTour;