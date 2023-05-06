import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];

  let hours = props.date.getHours();

  let AmOrPm = "";
  if (hours > 11) {
    AmOrPm = "PM";
  } else {
    AmOrPm = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours === 0) {
    hours = 12;
  }
  hours = String(hours).padStart(2, "0");

  let minutes = props.date.getMinutes();
  minutes = String(minutes).padStart(2, "0");

  return (
    <div>
      {day} {hours}:{minutes} {AmOrPm}
    </div>
  );
}
