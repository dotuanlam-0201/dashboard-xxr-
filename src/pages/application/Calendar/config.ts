interface ICalendar {
  name: string; // Name of the event
  location: string; // Location of the event
  date: string; // Date of the event
  time: string; // Time of the event
  color: string
}

export const CALENDAR_DUMP_DATA: ICalendar[] = [
  {
    name: "Festival",
    location: "Berlin",
    date: "Monday, Jan 4, 2022",
    time: "12am to 2pm",
    color: "blue",
  },
  {
    name: "Exam",
    location: "France",
    date: "Monday, Jan 4, 2022",
    time: "12am to 2pm",
    color: "purple",
  },
  {
    name: "Eid festival",
    location: "Germany",
    date: "Tuesday, Jan 5, 2022",
    time: "12am to 2pm",
    color: "cyan",
  },
  {
    name: "Conference",
    location: "UK",
    date: "Friday, Jan 8, 2022",
    time: "12am to 2pm",
    color: "green",
  },
  {
    name: "Design Review",
    location: "Berlin",
    date: "Monday, Jan 9, 2022",
    time: "12am to 2pm",
    color: "magenta",
  },
  {
    name: "Glastonbury",
    location: "Sweden",
    date: "Friday, Jan 1, 2022",
    time: "12am to 2pm",
    color: "pink",
  },
  {
    name: "Sport",
    location: "Switzerland",
    date: "Tuesday, Jan 2, 2022",
    time: "12am to 2pm",
    color: "red",
  },
  {
    name: "Design Review",
    location: "China",
    date: "12am to 2pm",
    time: "12am to 2pm",
    color: "orange",
  },
];