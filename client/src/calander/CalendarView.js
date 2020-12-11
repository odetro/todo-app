import React from 'react';
import Calendar from 'react-calendar';
import './CalendarView.scss';

export function CalendarView() {
    return (
        <div className="calander-container">
            <Calendar calendarType="Hebrew" prev2AriaLabel=""/>
        </div>
    )
}