import { makeStyles } from "@mui/styles";

export default makeStyles((theme: any) => ({
    button: {
        "& button.btntiny": {
            backgroundColor: theme?.palette?.primary?.main,
            backgroundOrigin: "padding-box",
            borderRadius: "5px",
            color: "#fff",
            margin: "0 0 0 30px",
            textTransform: "none",

            font: "normal normal 500 12px/16px Nunito",
            letterSpacing: "0.02em",
            padding: "5px 34px",
            minHeight: "24px",
            minWidth: "100px",
            "&:hover": {
                opacity: 0.2,
            },
            "&:active": {
                color: "#fff",
                backgroundColor: theme?.palette?.common?.black,
                opacity: 0.4,
            },
            "&:focus": {
                border: "1px solid #A8A8A8",
                borderRadius: "7px",
                opacity: 1,
                minWidth: "106px",
            },
            "&.Mui-disabled": {
                opacity: "0.3 !important",
            },
        },
        "& button.secondaryButton": {
            color: theme?.palette?.primary?.main,
            border: `0.5px solid ${theme?.palette?.primary?.main}`,
            boxShadow: `inset 0px 0px 0px 0.5px ${theme?.palette?.primary?.main}`,
            backgroundColor: theme?.palette?.secondary?.contrastText,
            fontWeight: "bolder",
        },
    },
}));