import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UpdateProfileScreen = () => {
  const user = {
    name: "John Doe",
    number: "1234567890",
    address: {
      street: "123 Main St",
      city: "Springfield",
      country: "USA",
    },
  };

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleUpdateProfile = async () => {
    const userData = {
      user_id: user?.id,
      email: user?.email,
      address: {
        street,
        city,
        country,
      },
      number,
      name,
    };

    try {
      Alert.alert("Address updated successfully!");
    } catch (error) {
      console.log("Error updating address:", error);
      Alert.alert("Failed to update address.");
    }
  };

  return (
    <ScrollView style={{ marginTop: 50 }}>
      {/* Image at the top */}
      <Image
        source={{
          uri: "https://img2.thuthuatphanmem.vn/uploads/2018/12/25/anh-gai-xinh-am-ap_012858881.jpg",
        }} // Add your image URL here
        style={styles.headerImage}
      />
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>Cập nhật thông tin</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholderTextColor={"#A9A9A9"}
          placeholder="Tên của bạn"
          style={styles.input}
        />

        <TextInput
          value={number}
          onChangeText={setNumber}
          placeholderTextColor={"#A9A9A9"}
          placeholder="Số điện thoại"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          value={street}
          onChangeText={setStreet}
          placeholderTextColor={"#A9A9A9"}
          placeholder="Địa chỉ (đường)"
          style={styles.input}
        />
        <TextInput
          value={city}
          onChangeText={setCity}
          placeholderTextColor={"#A9A9A9"}
          placeholder="Thành phố"
          style={styles.input}
        />
        <TextInput
          value={country}
          onChangeText={setCountry}
          placeholderTextColor={"#A9A9A9"}
          placeholder="Quốc gia"
          style={styles.input}
        />

        <Pressable onPress={handleUpdateProfile} style={styles.button}>
          <Text style={styles.buttonText}>Thay đổi</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  input: {
    padding: 12,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#008E97",
    padding: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
});

export default UpdateProfileScreen;
