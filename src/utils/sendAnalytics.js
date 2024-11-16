import axios from "./axios";

const sendAnalytics = (page) => {
  try {
    axios.get("https://api.ipify.org?format=json").then((response) => {
      const ipAddress = response.data?.ip;
      axios.post(`/analytics/page/${page}`, {
        ipAddress,
      });
    });
  } catch (error) {
    console.error("Error sending analytics:", error);
  }
};

export default sendAnalytics;
