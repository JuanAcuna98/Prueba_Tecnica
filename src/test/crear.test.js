import { render,screen } from "@testing-library/react";
import CreateUser from "../components/crear/CreateUser";

describe( 'Mandar peticion de crear',() => {
    test(<CreateUser/>)
    const crear = screen.getByRole('crear', { Submit : 'mandar peticion' })
    expect(crear).toBe(succes)
} )