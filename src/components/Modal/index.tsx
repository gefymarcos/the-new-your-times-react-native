import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { ArticleProps } from '../../modules/articles/types';
import theme from '../../styles/theme'
import { clearArticleSelectedAction } from '../../modules/articles/actions'
import { useDispatch } from "react-redux";

const BackDrop = ({ title, abstract, url }: ArticleProps) => {
  const [modalVisible, setModalVisible] = useState(true);
  const dispatch = useDispatch()

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.card}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.abstract}>
                {abstract}
              </Text>
              <Text style={styles.url}>
                {url}
              </Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                dispatch(clearArticleSelectedAction())
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>Back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width: '100%',
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: theme.colors.secondary,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: 150
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  card: {
    paddingVertical: theme.spacings.medium,
    justifyContent: 'center',
  },
  url: {
    marginHorizontal: theme.spacings.xsmall,
    fontSize: theme.font.sizes.small,
    color: theme.colors.lightGray
  },
  title: {
    fontWeight: '600',
    fontSize: theme.font.sizes.large,
    marginVertical: theme.spacings.xxsmall,
    marginHorizontal: theme.spacings.xsmall,
    color: theme.colors.black
  },
  abstract: {
    fontSize: theme.font.sizes.medium,
    lineHeight: theme.spacings.small,
    marginVertical: theme.spacings.xxsmall,
    marginHorizontal: theme.spacings.xsmall,
    color: theme.colors.black
  },
});

export default BackDrop;
