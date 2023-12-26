import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Frame from "./components/Frame";
import Home from "./Routes/Home";
import Schedule from "./Routes/Schedule";
import ScheduleMore from "./Routes/ScheduleMore";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Frame />,
                children: [
                    {
                        path: "",
                        element: <Home />,
                    },
                    {
                        path: "schedules",
                        element: <Schedule />,
                    },
                    {
                        path: "schedules_more",
                        element: <ScheduleMore />,
                    },
                    {
                        path: "ranking",
                        element: <div>ranking</div>,
                    },
                    {
                        path: "manage",
                        element: <div>manage</div>,
                    }
                ]
            },
        ],
    }
], {basename: "/gshs_lcg"});

export default router;