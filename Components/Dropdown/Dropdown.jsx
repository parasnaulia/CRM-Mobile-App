import React from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, StyleSheet } from "react-native";

const Dropdown = ({
  label, // Label for the dropdown
  name, // Name of the field (key for state updates)
  selectedValue, // Current selected value
  handleInputChangeData, // Callback to handle changes
  data = [], // Array of options
  containerStyle = {}, // Optional custom container styles
  pickerStyle = {}, // Optional custom picker styles
  labelStyle = {}, // Optional custom label styles
}) => {
  // Deduplicate the data based on the `value` property
  const uniqueData = Array.from(
    new Map(data.map((item) => [item.value, item])).values()
  );

  return (
    <View style={[styles.pickerContainer, containerStyle]}>
      {label && <Text style={[styles.pickerLabel, labelStyle]}>{label}</Text>}
      <Picker
        selectedValue={selectedValue}
        onValueChange={(value) => handleInputChangeData(value, name)}
        style={[styles.picker, pickerStyle]}
      >
        <Picker.Item label="Select an option" value="" />
        {uniqueData.map((item, index) => (
          <Picker.Item
            key={index} // Unique key for each item
            label={item?.label}
            value={item?.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    width: "100%",
    marginBottom: 15,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
    fontWeight: "bold",
  },
  picker: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});

export default Dropdown;
