import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  mainHeader:{
      height:"70px",
      width: "100vw",
      backgroundColor:"#fff",
      boxShadow:"0px 4px 4px 0px #00000040"
  },
  container:{
      height:"100%",
      display:"flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "center",
  },
  imageView:{
    width:134,
    height:34,
    marginLeft:35
},menuView:{
    flex:2,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
},acountView:{
    textAlign:"right",
    width:"320px",
    height:"20px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

},
link:{
    padding:"0px 25px 0px 25px",
    color:"#171725",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    ":active":{
        color:"blue"
    }
},
search:{
    width:24,
    marginRight:25
},
notification:{
    width:24,
    marginRight:25,
    position:"relative"
},
profile:{
    display:"flex",
    flexDirection:"row",
    marginRight:"32px"
},
dot:{
    top: "-1px",
    position: "absolute",
    right: "1px"
},
profileImage:{
    width:32,
    height:32
},
profileFont1:{
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "14px",
    letterSpacing: "0.10000000149011612px"
    
},profileFont2:{
    fontFamily: "Roboto",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "12px",
    letterSpacing: "0.10000000149011612px"

}

}); 