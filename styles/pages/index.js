import appConfig from "../../config.json";

export const boxContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: appConfig.theme.colors.primary[500],
  backgroundImage:
    "url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundBlendMode: "multiply",
};

export const boxContent = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  width: "100%",
  maxWidth: "700px",
  borderRadius: "5px",
  padding: "32px",
  margin: "16px",
  boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
  backgroundColor: appConfig.theme.colors.neutrals[700],
};

export const textSubtitle = {
  marginBottom: "32px",
  color: appConfig.theme.colors.neutrals[300],
};

export const textFieldColors = {
  textColor: appConfig.theme.colors.neutrals[200],
  mainColor: appConfig.theme.colors.neutrals[900],
  mainColorHighlight: appConfig.theme.colors.primary[500],
  backgroundColor: appConfig.theme.colors.neutrals[800],
};

export const buttonColors = {
  contrastColor: appConfig.theme.colors.neutrals["000"],
  mainColor: appConfig.theme.colors.primary[500],
  mainColorLight: appConfig.theme.colors.primary[400],
  mainColorStrong: appConfig.theme.colors.primary[600],
};

export const boxForm = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: { xs: "100%", sm: "50%" },
  textAlign: "center",
  marginBottom: "32px",
};

export const boxImageContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "200px",
  padding: "16px",
  backgroundColor: appConfig.theme.colors.neutrals[800],
  border: "1px solid",
  borderColor: appConfig.theme.colors.neutrals[999],
  borderRadius: "10px",
  flex: 1,
  minHeight: "240px",
};

export const image = {
  borderRadius: "50%",
  marginBottom: "16px",
};

export const textUserName = {
  color: appConfig.theme.colors.neutrals[200],
  backgroundColor: appConfig.theme.colors.neutrals[900],
  padding: "3px 10px",
  borderRadius: "1000px",
};
