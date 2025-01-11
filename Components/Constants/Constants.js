export const Url = "http://192.168.29.193:8000/api/";

export const emailUrl = "http://192.168.29.193:3000";

export const ImageUrl = "http://192.168.29.193:8000/Image/";
export const webSocketUrl = "http://192.168.29.193:8000";



export const options = [
  { label: "Proposal Sent", value: "Proposal Sent" },
  { label: "Interested", value: "Interested" },
  { label: "Negotiation", value: "Negotiation" },
  { label: "Qualified", value: "Qualified" },
  { label: "Closed Won-Converted", value: "Closed Won-Converted" },
  { label: "Closed Won-not Converted", value: "Closed Won-not Converted" },
];

export const enquirySources = [
  { label: "Select Source of Enquiry", value: "" },
  { label: "Website", value: "Website" },
  { label: "Referral", value: "Referral" },
  { label: "Advertisement", value: "Advertisement" },
  { label: "Cold Call", value: "Cold Call" },
];

export const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

// export const Url = "http://localhost:8000/api/";
// export const ImageUrl = "http://localhost:8000/Image/";

// export const webSocketUrl = "http://localhost:8000";
