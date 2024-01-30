import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, Modal, Alert, Image } from "react-native";
import axios from "axios";

const ListComponent = () => {
  const [photoItems, setPhotoItems] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("https://api.unsplash.com/photos/?client_id=JbespzrZiwFSuc0terxHKLUCk6kZKAsdPLjU4YqvIzo", {
        params: {
          query: "nature",
          client_id: "560291",
        },
      });

      const photoData = response.data;
      setPhotoItems(photoData);
    } catch (error) {
      console.error("Error fetching photos", error);
    }
  };

  const PhotoItem = ({ photo }) => {
    return (
      <TouchableOpacity
        style={styles.photoItem}
        onPress={() => {
          setSelectedPhoto(photo);
          setShowProfile(true);
        }}
      >
        <Image source={{ uri: photo.urls.thumb }} style={styles.photoImage} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {photoItems && (
        <View style={styles.container}>
          <View style={styles.photoWrapper}>
            <Text style={styles.sectionTitle}>Lista de Fotos</Text>
            <View style={styles.photoItems}>
              <FlatList
                data={photoItems}
                renderItem={({ item }) => <PhotoItem photo={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
              />
            </View>
          </View>

          <Modal
            transparent={true}
            animationType={"slide"}
            visible={showProfile}
            onRequestClose={() => {
              Alert.alert("Modal cerrado");
              setShowProfile(!showProfile);
            }}
          >
            <View style={styles.centerView}>
              <View style={styles.modalView}>
                {selectedPhoto && (
                  <Image source={{ uri: selectedPhoto.urls.full }} style={styles.modalImage} resizeMode="contain" />
                )}
                <Text style={styles.modalText}>{selectedPhoto?.description || "Sin descripción"}</Text>
                <TouchableOpacity style={styles.closeButton} onPress={() => setShowProfile(false)}>
                  <Text style={styles.closeButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EAED",
    marginTop: StatusBar.currentHeight || 0,
    display: "flex",
  },
  photoWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    height: 900,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  photoItems: {
    marginTop: 20,
  },
  photoItem: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  photoImage: {
    width: "100%",
    height: 150,
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: "100%",
    height: "80%", // Ajustar la altura según sea necesario
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: "100%",
    height: "70%", // Ajustar la altura según sea necesario
    marginBottom: 10,
    borderRadius: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    width: "100%",
  },
  closeButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
  },
});

export default ListComponent;
