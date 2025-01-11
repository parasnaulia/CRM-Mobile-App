import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const LeadsByStageCharts = () => {
  // Sample data for a funnel
  const data = {
    labels: ["Awareness", "Interest", "Desire", "Action"],
    datasets: [
      {
        data: [100, 75, 50, 25], // Simulated funnel data
      },
    ],
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leads By Stage</Text>
      <BarChart
        data={data}
        width={screenWidth - 40} // Adjust the width to fit the screen
        height={220}
        yAxisSuffix="%"
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#4CAF50",
          backgroundGradientTo: "#81C784",
          decimalPlaces: 0, // Removes decimal points
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Bar colors
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          barPercentage: 0.8,
        }}
        verticalLabelRotation={0}
        style={styles.chart}
        showValuesOnTopOfBars
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10,
    backgroundColor: "#1E1E2F", // Replace with your dashboard's background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
    margin: "auto",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    width: "100%",
  },
});

export default LeadsByStageCharts;
