import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../api/fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  // if I don't have the data before ?? give me an empty array:
  return [results?.data?.breeds ?? [], results.status];
}
