import { Today } from "@mui/icons-material";
import {
    Box,
    Typography,
    FormControl,
    FormHelperText,
    TextField,
    TextareaAutosize,
    Stack,
    Select,
    MenuItem,
    Button,
} from "@mui/material";

import { FormProps } from "./../../interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
    type,
    register,
    handleSubmit,
    // handleImageChange,
    formLoading,
    onFinishHandler,
    // propertyImage,
}: FormProps) => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                {type} a Property
            </Typography>

            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
                <form
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Nom de l'investissements
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            {...register("title", { required: true })}
                        />
                    </FormControl>
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Nom de la platforme
                        </FormHelperText>
                        <Select
                                variant="outlined"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                {...register("platform", {required: true,})}
                            >
                                <MenuItem value="Bricks">Bricks</MenuItem>
                                <MenuItem value="RealT">RealT</MenuItem>
                                <MenuItem value="LANDE">LANDE</MenuItem>
                                <MenuItem value="Baltis">Baltis</MenuItem>
                                <MenuItem value="Clubfunding">Clubfunding</MenuItem>
                                <MenuItem value="Enerfip">Enerfip</MenuItem>
                                <MenuItem value="Lymo">Lymo</MenuItem>
                                <MenuItem value="Upstone">Upstone</MenuItem>
                            </Select>
                            <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Rendement (en %)
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            {...register("yearYield", { required: true })}
                        />
                    </FormControl>
                    </FormControl>
                    <Stack direction="row" gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Date de début
                            </FormHelperText>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                color="info"
                                type="date"
                                variant="outlined"
                                {...register("startDate", { required: true })}
                            />
                        </FormControl>
                        <FormControl>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Date de fin (optionnel)
                            </FormHelperText>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                color="info"
                                type="date"
                                variant="outlined"
                                {...register("endDate", { required: true })}
                            />
                        </FormControl>
                    </Stack>
                    <Stack direction="row" gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Select Property Type
                            </FormHelperText>
                            <Select
                                variant="outlined"
                                color="info"
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue="apartment"
                                {...register("propertyType", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="apartment">Apartment</MenuItem>
                                <MenuItem value="villa">Villa</MenuItem>
                                <MenuItem value="farmhouse">farmhouse</MenuItem>
                                <MenuItem value="condos">Condos</MenuItem>
                                <MenuItem value="townhouse">Townhouse</MenuItem>
                                <MenuItem value="duplex">Duplex</MenuItem>
                                <MenuItem value="studio">Studio</MenuItem>
                                <MenuItem value="chalet">Chalet</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Montant de l'investissement
                            </FormHelperText>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                color="info"
                                type="number"
                                variant="outlined"
                                {...register("investedAmount", { required: true })}
                            />
                        </FormControl>
                    </Stack>
                    <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
                </form>
            </Box>
        </Box>
    );
};

export default Form;
