import { Typography } from "@mui/material";
import DisplayCard from "../components/DisplayCard";

export const HomePage = (): JSX.Element => {
    return (<div><Typography variant="h6">Content coming soon!</Typography>
        <DisplayCard content={<iframe width="100%" height="97%" src="https://www.youtube.com/embed/1OG1KEjJu48?si=ODvUNIzow3d-kWiJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>} />
    </div>);
};

export default HomePage;