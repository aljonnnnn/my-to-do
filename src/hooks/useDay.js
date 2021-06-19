import { useEffect, useState } from "react";

const useDay = () => {
  const [day, setDay] = useState("");

  const getDay = () => {
    switch (new Date().getDay()) {
      case 0:
        setDay("Sunday");
        break;
      case 1:
        setDay("Monday");
        break;
      case 2:
        setDay("Tuesday");
        break;
      case 3:
        setDay("Wednesday");
        break;
      case 4:
        setDay("Thursday");
        break;
      case 5:
        setDay("Friday");
        break;
      case 6:
        setDay("Saturday");
        break;
      default:
        setDay("wrong date");
    }
  };

  useEffect(() => {
    getDay();
  }, []);

  return { day };
};

export default useDay;
