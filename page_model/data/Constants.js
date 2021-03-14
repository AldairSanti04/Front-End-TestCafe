import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.VALID_USERNAME,
        PASSWORD: process.env.VALID_PASSWORD
    },
    INVALID_USER:{
        USERNAME: process.env.INVALID_USERNAME,
        PASSWORD: process.env.INVALID_PASSWORD
    }
}

export const INFORMATION = {
    USER_INFO:{
        NAME: 'Aldair',
        LASTNAME: 'Santiago',
        POSTAL: '12345'
    }
}