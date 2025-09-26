import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [reportUrl, setReportUrl] = useState<string | null>(null);

    const bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPTUhMODF1YnRMZy0yeGlmcnZLZV93VFpfVWdWLTNVenl3bWhyVmt2aTI0In0.eyJleHAiOjE3NTg1NTIxODIsImlhdCI6MTc1ODU1MTg4MiwianRpIjoib25ydHRlOjNlYWFiNDkyLWNmNjUtNDZlMC1hMmY1LTY4NGI2NDA1NGZmMSIsImlzcyI6Imh0dHBzOi8vaWFtLWludGVybmFsLXByZXZlbnQtZGV2LmFuaS5sb2NhbC9yZWFsbXMvcHJldmVudCIsImF1ZCI6WyJQUkVWRU5ULUpBU1BFUi1CRSIsImFjY291bnQiXSwidHlwIjoiQmVhcmVyIiwiYXpwIjoiUFJFVkVOVC1HVyIsInNpZCI6ImVmODJkZTZlLWFkNDktNGJhZC04NmEwLTIzZTdlZGJjZWZiNSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiUk9MRV9BRE1JTiIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1wcmV2ZW50Il19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiUFJFVkVOVC1KQVNQRVItQkUiOnsicm9sZXMiOlsiUk9MRV9BRE1JTiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJhdWRpZW5jZV9QUkVWRU5ULUpBU1BFUi1CRSBwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiUmF6dmFuIFBhZHVyYXJ1IiwicHJlZmVycmVkX3VzZXJuYW1lIjoicmF6dmFuLnBhZHVyYXJ1QGNvbm5lY3Rpb25zLnRlY2giLCJnaXZlbl9uYW1lIjoiUmF6dmFuIiwiZmFtaWx5X25hbWUiOiJQYWR1cmFydSIsImVtYWlsIjoicmF6dmFuLnBhZHVyYXJ1QGNvbm5lY3Rpb25zLnRlY2gifQ.e-irmmBHUyuioFgFhXGNNGnKF9gAJQoXMFV2MqiGnZpFfiGnYlcMtJV1Ik-96pZIdt-usEyg5aZISbCm5N5cL7ILxMAZ1ZwtejRI_1UMDappujdVuD5pyLZireU1yPFTdINTOWgdgRqUnjTzcM--cPQI5M2LVcFoo6qFKeM15v0Ng3DwjkiQhUBHIYl59NUo8JwNzhcyiExxyoolKXJ-9q74VJSg6yaWqrwubPvgFpzCehXyJ2G2XZ7LjryIAnWCiEqqPV7F7TInT0HPsMxZpIg6Vd0WFn3_UT1zHMm0O9UORIFVJyGgcr-ItPpGusr1vTqWHVmKNuXgq7OeSQzlww";

    const getReportUrl = () => {
        const baseUrl = "http://localhost:8097/jasperserver/getByName/report/Blank_A4";
        const params = new URLSearchParams();

        // AVERI NEJUSTIFICATE
        params.append("Parameter1", "PreventV2");
        params.append("Period", "Ianuarie-Decembrie-2025");
        params.append("AveriNejCaz", "4");
        params.append("ValoareNejRon", "2708809");
        params.append("ValoareNejEur", "585542");
        params.append("NrFuncPub", "4");

        // INCOMPATIBILITATI
        params.append("NrPrefecti_Incomp", "1");
        params.append("NrConsJud_Incomp", "2");
        params.append("NrPrimari_Incomp", "2");
        params.append("NrVicePrim_Incomp", "1");
        params.append("NrConsLoc", "6");
        params.append("NrPersFctCon_Incomp", "6");
        params.append("FunctPubSp_Incomp", "4");
        params.append("NrFuncPub_Incomp", "3");

        // CONFLICTE DE INTERESE ADMINISTRATIVE
        params.append("NrCazuri", "45");
        params.append("NrConsJud_Incomp", "34");
        params.append("NrPrimari_Incomp", "9");
        params.append("NrConsLoc", "18");
        params.append("NrPersFctCon_Incomp", "1");
        params.append("NrFuncPub_Incomp", "5");

        // SAVARSIRE FAPTE PENALE
        params.append("NrCazuri", "9");
        params.append("NrPersoanePenale", "19");
        params.append("NrCazuriFalsDec", "2");
        params.append("NrPrimari_Incomp", "1");
        params.append("NrConsLoc", "34");
        params.append("NrPersFctCon_Incomp", "4");
        params.append("FunctPubSp_Incomp", "4");

        // SANCTIUNI ADMINISTRATIVE
        params.append("NrAmenziAdm", "648");
        params.append("NrSanc1", "602");
        params.append("NrSanc2", "26");
        params.append("NrSanc3", "20");
        params.append("NrPlangeri", "11");
        params.append("NrDecMen", "7");
        params.append("NrDecAn", "4");

        return `${baseUrl}?${params.toString()}`;
    };

    const openReport = async () => {
        const url = getReportUrl();
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        });

        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setReportUrl(objectUrl);
        setOpen(true);
    };

    return (
        <div className="App">
            <h1>Modul de Generare Raport</h1>

            <button onClick={openReport}>Deschide Raport</button>

            {open && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={() => setOpen(false)}>
                            ✖
                        </button>
                        {reportUrl && (
                            <iframe
                                src={reportUrl}
                                width="100%"
                                height="600px"
                                style={{ border: "none" }}
                                title="Jasper Report"
                            ></iframe>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
