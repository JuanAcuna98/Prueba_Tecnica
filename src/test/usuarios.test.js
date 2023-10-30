import { screen } from "@testing-library/react";
import UserTable from "../components/usuarios/UserTable"

describe('listar usuarios', () => {
    test(<UserTable/>)
    const user = screen.getByRole('tabla', {value : 'datos'})
    expect(user).toBe(value);
})