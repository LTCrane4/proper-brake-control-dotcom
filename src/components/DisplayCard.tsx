import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

export type DisplayCardProps = {
    title?: string;
    content?: ReactNode;
};

export const DisplayCard = ({ title, content }: DisplayCardProps): JSX.Element => {
    return (
        <Box sx={{ margin: '4rem', height: '90rem' }}>
            <Card sx={{ height: '90rem' }}>
                <CardContent sx={{ height: '100%', marginBottom: '2rem' }}>
                    {title ? <Typography variant="h6">{title}</Typography> : null}
                    {content ?? null}
                </CardContent>
            </Card>
        </Box>
    );
};

export default DisplayCard;