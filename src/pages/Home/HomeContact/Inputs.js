const inputs = [
    {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Krzysztof",
        errorMessage: "Podane imię jest nieprawidłowe!",
        label: "Wpisz swoje imię",
        pattern: "[^' ', 0-9]+",
        required: true,
    },

    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "abc@xyz.pl",
        errorMessage: "Podany email jest nieprawidłowy!",
        label: "Wpisz swój email",
        required: true,
    },
    {
        id: 3,
        name: "textArea",
        type: "textarea",
        placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        errorMessage: "Wiadomość musi zawierać conajmniej 120 znaków!",
        label: "Wpisz swoją wiadomość",
        required: true,
    }
]

export default inputs;