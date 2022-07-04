import { render, screen } from "@testing-library/react";
import Nav from "../components/layouts/nav";
import "@testing-library/jest-dom";

describe("Nav", () => {
  it("Renders a Navbar", () => {
    render(<Nav />);

    const logo = screen.getByRole("img");
    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About Us");
    const bookingLink = screen.getByText("Bookings");
    const contactLink = screen.getByText("Contact Us!");

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/zouk_studios_icon.svg')
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(bookingLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
