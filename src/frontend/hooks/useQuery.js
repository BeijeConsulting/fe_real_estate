import { useLocation } from "react-router-dom";

export default function useURLQuery() {
    return new URLSearchParams(useLocation().search);
  }