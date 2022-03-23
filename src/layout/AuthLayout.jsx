import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
    return (
        <>
            <main className="container mx-auto md:grid md:gap-12 p-5 md:grid-cols-2 items-center"> 
                <Outlet />
            </main>
        </>
    )
}
