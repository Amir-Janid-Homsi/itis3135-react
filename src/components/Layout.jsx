import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    const { pathname } = useLocation();
    const isDocs = pathname === "/instructions";
    const isProduct = pathname === "/product";

    const isSnowflake =
    pathname === "/crappy" ||
    pathname === "/Hobby" ||
    pathname === "/mirroreddesigns";

    return (
        <>
        {!isSnowflake && <Header />}

        {isProduct || isSnowflake ? (
            <Outlet />
        ) : (
            <main className={isDocs ? "no-center" : ""}>
            <Outlet />
            </main>
        )}

        {!isSnowflake && <Footer />}
        </>
    );
}
