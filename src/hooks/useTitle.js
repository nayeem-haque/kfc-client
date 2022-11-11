import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - KFC`;
  }, [title]);
};

export default useTitle;
