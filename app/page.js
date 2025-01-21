"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from "./components/Footer";
import SponsorSlider from "./components/SponsorSlider";
import "./globals.css";

export default function Home() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events/thisWeek');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <main className="flex-grow flex items-center justify-center bg-gray-100 bg-opacity-50 p-4 main-content bg-home h-screen">
                <div className="flex flex-col items-center justify-center w-full max-w-4xl relative">
                    <div className="flex flex-row items-stretch justify-between w-full equal-height">
                        <div className="bg-opacity-50 bg-white p-8 shadow-lg rounded-lg text-center w-2/3 mb-20 flex flex-col justify-center">
                            <h1 className="font-bold mb-4 text-black drop-shadow-lg">
                                <span className="font-bold text-4xl">Välkommen till</span> <br/>
                                <span className="font-extrabold text-6xl">Arlanda MC</span>
                            </h1>
                            <p className="text-lg mb-4 text-black">
                                Klubben för motorcykelentusiaster
                            </p>
                            <div className="mt-5 text-center">
                                <section className="text-lg text-black">
                                    <a href="/calendar" className="flex items-center justify-center text-blue-600 no-underline mb-2 hover:underline">
                                        <p className="text-black font-bold">Kalender</p>
                                        <FontAwesomeIcon icon={faCalendarAlt} className="ml-2 w-6 h-6 text-black"/>
                                    </a>
                                </section>
                                <p className="text-lg text-black mt-2"></p>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-75 p-5 rounded-lg shadow-md max-w-xs mx-auto flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Öppettider denna vecka</h2>
                            <ul className="list-none p-0">
                                {events.map((event) => (
                                    <li key={event.id} className="flex flex-col justify-between py-1.5 mb-5">
                                        <span className="font-semibold">{event.title}:</span> {event.date} {event.start_time} - {event.end_time}
                                        <p>{event.description}</p>
                                        {event.color === '#FF0000' && (
                                            <p className="text-red-600 font-bold">Stängt</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <SponsorSlider />
                </div>
            </main>
        </div>
    );
}