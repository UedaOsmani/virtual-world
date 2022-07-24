const inputFields = [
    {
        id: 1,
        name: 'name',
        type: 'text',
        placeholder: 'Enter your name',
        errorMessage: 'Name shoule be minimum of 3 and maximum of 30 characters with no special characters',
        label: 'Name',
        required: 'true',
        pattern: "^[A-Za-z0-9]{3,30}$"
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        placeholder: 'example@mail.com',
        errorMessage: 'Name shoule be minimum of 3 and maximum of 20 characters with no special characters',
        label: 'Email',
        required: 'true',
    },
    {
        id: 3,
        name: 'linkedin',
        type: 'text',
        placeholder: 'linkedin profile link',
        errorMessage: 'Name shoule be minimum of 3 and maximum of 20 characters with no special characters',
        label: 'Linkedin',
        required: 'false',
    },
    {
        id: 4,
        name: 'telephone',
        type: 'text',
        placeholder: 'linkedin profile link',
        errorMessage: 'Name shoule be minimum of 3 and maximum of 20 characters with no special characters',
        label: 'Telophone',
        required: 'false',
    },
    {
        id: 5,
        name: 'portfolio',
        type: 'text',
        placeholder: 'linkedin profile link',
        errorMessage: 'Name shoule be minimum of 3 and maximum of 20 characters with no special characters',
        label: 'Portfolio',
        required: 'false',
    },
    {
        id: 6,
        name: 'others',
        type: 'text',
        placeholder: '',
        errorMessage: 'Name shoule be minimum of 3 and maximum of 20 characters with no special characters',
        label: 'Others',
        required: 'false',
    }
]

export default inputFields