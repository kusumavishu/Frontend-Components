import React, { useEffect, useState } from "react";
import {
  Platform,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const formatToReadableDateDDMMYYYY = (date) => {
  return date.toLocaleDateString("en-GB"); // DD/MM/YYYY format
};

const formatToTime = (date) => {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const PrimaryDateTimePicker = ({
  label,
  value,
  onChangeText,
  error,
  extrastyles,
  minimumDate,
  maximumDate,
  star,
}) => {
  const [date, setDate] = useState(new Date(value));
  const [mode, setMode] = useState("date");
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setShowPicker(false);
      return;
    }

    const currentDate = selectedDate || date;
    setDate(currentDate);

    console.log(currentDate);

    if (mode === "date") {
      setMode("time");
      if (Platform.OS === "ios") {
        setShowPicker(true);
      } else {
        setShowPicker(false);
        setTimeout(() => setShowPicker(true), 100);
      }
    } else {
      setShowPicker(false);
    }
    onChangeText(currentDate);
  };

  return (
    <View style={[styles.container, extrastyles]}>
      <Text style={styles.label}>
        {label} {star && <Text style={styles.required}>*</Text>}
      </Text>

      <TouchableOpacity
        onPress={() => {
          setMode("date");
          setShowPicker(true);
        }}
      >
        <View style={[styles.inputContainer, error && styles.errorBorder]}>
          <TextInput
            value={
              date
                ? formatToReadableDateDDMMYYYY(date) + " " + formatToTime(date)
                : ""
            }
            editable={false}
            style={styles.input}
          />
          <MaterialIcons
            name={mode === "time" ? "access-time" : "date-range"}
            size={20}
            color="black"
          />
        </View>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          is24Hour={false}
          onChange={onChange}
        />
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    color: "#4C5664",
    marginBottom: 5,
  },
  required: {
    color: "red",
    fontSize: 17,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.8,
    borderRadius: 5,
    height: 40,
    borderColor: "#5F6B6980",
    paddingHorizontal: 6,
  },
  errorBorder: {
    borderColor: "#ff3838",
  },
  input: {
    flex: 1,
    color: "green",
    fontSize: 14,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 2,
  },
});

export default PrimaryDateTimePicker;

// import React, { useState } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

// const DateTimePickerComponent = ({
//   onDateTimeChange,
//   initialDate = new Date(),
// }) => {
//   const [date, setDate] = useState(initialDate);
//   const [mode, setMode] = useState("date");
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     if (event.type === "dismissed") {
//       setShow(false);
//       return;
//     }

//     const currentDate = selectedDate || date;
//     setDate(currentDate);

//     if (mode === "date") {
//       // After date is picked, show time picker
//       setMode("time");
//       if (Platform.OS === "ios") {
//         // On iOS, we keep the picker visible and just change mode
//         setShow(true);
//       } else {
//         // On Android, we need to hide and show again for the mode change
//         setShow(false);
//         setTimeout(() => setShow(true), 100);
//       }
//     } else {
//       // After time is picked
//       setShow(false);
//       onDateTimeChange(currentDate);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.selectedDateTime}>
//         {/* {date.toLocaleString()} */}
//         {date.toLocaleString("en-US", { hour12: true })}
//       </Text>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   selectedDateTime: {
//     textAlign: "center",
//     fontSize: 16,
//     marginBottom: 10,
//   },
// });

// export default DateTimePickerComponent;
