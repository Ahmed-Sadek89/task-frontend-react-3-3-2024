export const boxHomeContainer = {
    display: 'flex', margin: "50px auto",
    width: { md: "75%", sm: "100%" },
    flexDirection: "column",
    backgroundColor: "secondary.main",
    gap: 3,
    padding: "30px  ",
    borderRadius: '10px',
    color: "secondary.light",
}

export const homeTitle = {
    fontWeight: "bold",
    fontSize: {xs: '25px', md: '35px'}
}

export const addTaskForm = {
    display: "flex",
    flexDirection: "column",
    gap: 2
}
export const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
        backgroundColor: "secondary.dark",
        color: 'secondary.contrastText',

        '& fieldset': {
            borderColor: 'secondary.contrastText',
        },
        '&:hover fieldset': {
            borderColor: 'secondary.light',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'secondary.light',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'secondary.contrastText',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'secondary.light',
    },
    "& .MuiButtonBase-root-MuiIconButton-root": {
        color: 'red'
    },
    "&.css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
        color: "red"
    }
}
export const selectCategoryStyle = {
    ...textFieldStyle,
    '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
        color: 'secondary.contrastText',
    },
}

export const datePickerStyle = {
    '& .MuiButtonBase-root': {
        color: 'secondary.contrastText',
        zIndex: "100"
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'blue', // Default border color
            backgroundColor: 'secondary.dark'
        },
        '&:hover fieldset': {
            borderColor: 'secondary.light', // Border color on hover
        },
        '&:focus-within fieldset': {
            borderColor: 'secondary.light', // Border color when focused
        },
        '&:not(:hover):not(:focus-within) fieldset': {
            borderColor: 'secondary.contrastText', // Border color when mouse is out
        },
    },
    '& .MuiInputLabel-root': {
        // Change the styles for the label
        color: 'secondary.contrastText',
    },
    '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
        color: 'secondary.contrastText', // Change text color of the input
        zIndex: "100"
    },
}


export const buttonBoxStyle = {
    display: "flex", justifyContent: "center"
}

export const buttonStyle = {
    display: "flex", gap: 3, alignItems: "center"
}

