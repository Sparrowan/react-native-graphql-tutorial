import { LoginResponse, LoginVariables } from "../@models/auth";
import { LOGIN } from "../gql/user";
import { client } from "../utils/client";



export const apiLogin = (variables: LoginVariables) => {
    variables = { ...variables, device: "mobile" };
    return client.mutate<LoginResponse, LoginVariables>({
        mutation: LOGIN,
        variables,
    });
};