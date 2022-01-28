import appConfig from "../../config.json";

export const boxContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: appConfig.theme.colors.primary[500],
  backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundBlendMode: "multiply",
  color: appConfig.theme.colors.neutrals["000"],
};

export const boxContent = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
  borderRadius: "5px",
  backgroundColor: appConfig.theme.colors.neutrals[700],
  height: "100%",
  maxWidth: "95%",
  maxHeight: "95vh",
  padding: "32px",
};

export const boxContainerMessages = {
  position: "relative",
  display: "flex",
  flex: 1,
  height: "80%",
  backgroundColor: appConfig.theme.colors.neutrals[600],
  flexDirection: "column",
  borderRadius: "5px",
  // padding: "16px",
};

export const boxForm = {
  display: "flex",
  alignItems: "center",
  padding: "8px",
};

export const textFieldChat = {
  width: "100%",
  border: "0",
  resize: "none",
  borderRadius: "5px",
  padding: "8px 8px",
  backgroundColor: appConfig.theme.colors.neutrals[800],
  marginRight: "8px",
  color: appConfig.theme.colors.neutrals[200],
};
