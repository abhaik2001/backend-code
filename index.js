import { listen } from "./spotify-backend/app";

const PORT = 3005;

listen(PORT, () => {
    console.log("app listening in port no : " + PORT);
});