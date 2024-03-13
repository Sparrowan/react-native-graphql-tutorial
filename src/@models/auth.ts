import { ImageSourcePropType } from "react-native";

export type LoginResponse = {
    login: {
        token: string;
    };
};


export type LoginVariables = {
    email: String,
    password: String,
    device: String
}

export type User = {
    name: String,
    email: String,
    avatar: String | null
}

export type OnboardItem = {
    id: Number,
    title: String,
    description: String,
    image: ImageSourcePropType
}