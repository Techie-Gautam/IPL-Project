import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const InPageNavigation = ({ teams }) => {
  const [index, setIndex] = useState(0);

  let tabLineRef = useRef();
  let btnRef = useRef();

  const toggleBtn = (btn, i) => {
    let { offsetWidth, offsetLeft } = btn;
    tabLineRef.current.style.width = offsetWidth + "px";
    tabLineRef.current.style.left = offsetLeft + "px";
    setIndex(i);
  };

  useEffect(() => {
    toggleBtn(btnRef.current, 0);
  }, [btnRef]);

  return (
    <div>
    {teams.length > 0 ? (
      <>
        {/* Container for the buttons */}
        <div className={`relative flex ${teams.length === 2 ? "bg-blue-900 w-full mx-auto flex justify-center" : ""}`}>
          {teams.map(({ path, title }, i) => (
            <Link to={path} key={i} className="w-full">
              <button
                ref={i === 0 ? btnRef : null}
                className={`px-10 py-2 mr-1 text-white font-semibold 
                  ${teams.length === 2 ? "w-[50%]" : ""}
                  ${index === i ? "bg-blue-600" : "bg-blue-800 hover:bg-blue-700"}`}
                onClick={(e) => toggleBtn(e.target, i)}
              >
                {title?.shortName ? title.shortName : title}
              </button>
            </Link>
          ))}
          {/* Dynamic underline for the selected tab */}
          <hr
            ref={tabLineRef}
            className="absolute bottom-0 h-[2px] w-0 bg-white transition-all duration-300"
          />
        </div>
  
        {/* Player details */}
        {teams[index]?.title?.playerDetails?.map((player, i) => (
          <div key={i} className="p-3 text-gray-200">
            <h1 className="text-lg font-bold">{player.fullName}</h1>
            <h3 className="text-sm">{player.role}</h3>
          </div>
        ))}
      </>
    ) : (
      <h3 className="text-gray-300">Team information unavailable</h3>
    )}
  </div>
  
  );
};

export default InPageNavigation;
