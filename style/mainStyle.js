import textInputMask from "react-masked-text";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    width: '90%',
  },
  btnLogin: {
    // width: "100%",
    // marginTop: 10,
    marginBottom: 20,
  },
  maskedInput: {
    flexGrow: 1,
    height: 40,
    fontSize: 18,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    borderStyle: "solid",
    alignSelf: "flex-start",

  },
  conainerMasked: {
    width: '95%',
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  erroMessage: {
    alignSelf: "flex-start",
    marginLeft: 15,
    fontSize:12,
    color:'#f00',
    marginBottom:10,

  },
})

export default styles