import { Typography } from "@peersyst/react-native-components";
import playground from "../playground";

const Welcome = () => (
    <Typography variant="h4" textAlign="center" style={{ padding: 10, lineHeight: 45 }}>
        Welcome to the Playground ⚽️
    </Typography>
);

export default playground("Welcome", Welcome);
