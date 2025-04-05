import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { AppProvider } from "../../context/AppProvider";
import { ProductsPage } from "../ProductsPage";

const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <AppProvider>{children}</AppProvider>;
};

const renderComponent = () => {
    return render(<ProductsPage />, { wrapper });
};

test("Loads and displays title", async () => {
    renderComponent();

    screen.getByRole("heading", { name: "Product price updater" });
});
