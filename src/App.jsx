import { RouterProvider } from "react-router-dom";
import appRouter from "./Route/Router";

function App(){
    return (
        <main>
            <RouterProvider router={appRouter} />
        </main>
    );
}

export default App;