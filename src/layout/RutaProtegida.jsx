import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {

    const { auth, cargando } = useAuth();

    if(cargando) return "cargando...";

    return (
        <>
            <main> 
                <Header />
                {auth?._id ? (
                    <main className="container mx-auto mt-10 p-4 md:p-0">
                        <Outlet /> 
                    </main>
                ) : <Navigate to="/" />}
                <Footer />
            </main>
        </>
    )
}

export default RutaProtegida;