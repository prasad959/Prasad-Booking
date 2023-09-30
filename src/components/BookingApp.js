import React, { useState } from "react";
import {
  faBed,
  faCalendarDays,
 
  faPerson,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./BookingApp.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
const BookingApp = () => {
  const navigate=useNavigate()
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  
  const handleSearch = () => {
    navigate("/storelist", { state: {destination,date,options} })
    toast.success(" Send the data successfully", "success", {
      position: toast.POSITION.TOP_CENTER,
    });
    
  };
  return (
    <div className="search">
      <div className="searchItem">
        <FontAwesomeIcon icon={faBed} className="Icons" />
        <input
          type="search"
          placeholder="Where are you going?"
          className="SearchInput"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="searchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="Icons" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="searchText"
        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="searchItem">
      
        <FontAwesomeIcon icon={faPerson} className="Icons" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="searchText"
        >
          {`${options.adult} adult . ${options.children} children . ${options.room} . room`}
        </span>
        {openOptions && (
          <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
                <button
                  disabled={options.adult <= 1}
                  className="optionCountButton"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button
                  className="optionCountButton"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
                <button
                  className="optionCountButton"
                  disabled={options.children <= 0}
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.children}</span>
                <button
                  className="optionCountButton"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
                <button
                  className="optionCountButton"
                  disabled={options.room <= 1}
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.room}</span>
                <button
                  className="optionCountButton"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            
            </div>
            <div>
            
            </div>
          </div>
        )}
        <div className="arrow">
        
        </div>
        
      </div>
      <div className="searchItem">
        <button className="btn" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default BookingApp;
