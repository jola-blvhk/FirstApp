import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import * as ImagePicker from "expo-image-picker";
import Input from "../../../components/Input";
import { categories } from "../../../data/categories";
import Button from "../../../components/Button";
const CreateListing = ({ navigation }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});
  const goBack = () => {
    navigation.goBack();
  };

  const uploadNewImage = async () => {
    setLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImages((list) => [...list, result.assets[0]]);
      setLoading(false);
    } else {
      alert("You did not select any image.");
    }
  };

  const onDeleteImage = (image) => {
    setSelectedImages((list) => {
      const filteredImages = list.filter((img) => img?.uri !== image?.uri);
      return filteredImages;
    });
  };

  const onChange = (value, key) => {
    setValues((val) => ({ ...val, [key]: value }));
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Header
          showBack={true}
          onBackPress={goBack}
          title="Create a new listing"
        />
      </View>

      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Text style={styles.sectionTitle}>Upload Photos</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity
              style={styles.uploadContainer}
              onPress={uploadNewImage}
              disabled={loading}
            >
              <View style={styles.uploadCircle}>
                <Text style={styles.uploadPlus}>+</Text>
              </View>
            </TouchableOpacity>

            {selectedImages?.map((image, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image source={{ uri: image?.uri }} style={styles.image} />
                <Pressable hitSlop={16} onPress={() => onDeleteImage(image)}>
                  <Image
                    key={image?.index}
                    source={require("../../../assets/cancel.png")}
                    style={styles.delete}
                  />
                </Pressable>
              </View>
            ))}

            {loading ? <ActivityIndicator /> : null}
          </View>

          <Input
            placeholder="Listing Title"
            label="Title"
            value={values.title}
            onChangeText={(v) => onChange(v, "title")}
          />
          <Input
            placeholder="Select the category"
            label="Category"
            value={values.category}
            keyboardType="numeric"
            type="picker"
            options={categories}
            onChangeText={(v) => onChange(v, "category")}
          />
          <Input
            placeholder="Enter price in USD"
            label="Price"
            value={values.price}
            keyboardType="numeric"
            onChangeText={(v) => onChange(v, "price")}
          />
          <Input
            placeholder="Tell us more..."
            style={styles.textarea}
            label="Description"
            value={values.description}
            onChangeText={(v) => onChange(v, "description")}
            multiline
          />
        </KeyboardAvoidingView>
        <Button title="Submit" style={styles.button} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(CreateListing);
