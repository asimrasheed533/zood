import useQuery from "./useQuery";

const useSettings = () => {
  const { data } = useQuery("/settings");

  return data;
};

export default useSettings;
