

import React, { useEffect, useState } from "react";
import { database, ref, onValue, set, increment, update } from "../firebase";

const LiveUserCount = () => {
  const [liveUsers, setLiveUsers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const liveRef = ref(database, "metrics/liveUsers");
    const totalRef = ref(database, "metrics/totalUsers");

    // Listen for live user count changes
    onValue(liveRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) setLiveUsers(data);
    });

    // Listen for total user count changes
    onValue(totalRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) setTotalUsers(data);
    });

    // Increment both live and total users
    update(ref(database, "metrics"), {
      liveUsers: increment(1),
      totalUsers: increment(1),
    });

    // Decrement live users on page unload
    const handleUnload = () => {
      update(ref(database, "metrics"), {
        liveUsers: increment(-1),
      });
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      handleUnload();
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return ( 
    <div className="flex flex-wrap gap-2 items-center  justify-start my-4">
  <div className="bg-[#111827] text-white px-6 py-3 rounded-lg border border-gray-500 shadow-md text-center text-base md:text-lg font-medium">
    🔴 Live: <strong className="text-green-400">{liveUsers}</strong>
  </div> 
  <div className=" bg-[#111827] text-white px-6 py-3 rounded-lg border border-gray-500 shadow-md text-center text-base md:text-lg font-medium">
    👥 Total User : <strong className="text-blue-400">{totalUsers}</strong>
  </div>
</div>


  );
};

export { LiveUserCount };

