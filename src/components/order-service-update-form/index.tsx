import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../../api/config";
import { Button } from "../button";
import {
    Container,
    StyledCard,
    StyledForm,
    StyledTextField,
    FormContainer,
    ButtonContainer,
    Column,
    StyledTextArea,
    StyledInputLabel,
    StyledSelect,
} from "./styles";
import { theme } from "../../styles/theme";
import { Equipment } from "../../pages/order-service-edit";
import { Autocomplete, FormControl, MenuItem } from "@mui/material";
import { OrderService } from "../../pages/order-service-edit";

type Props = {
    order: OrderService;
    user: {
        name: string;
        token: string;
    };
    initialData: Equipment | undefined;
    handleTippingNumberChange: (data: string) => void;
    units: { id: string; name: string; localization: string }[] | undefined;
};

const OrderServiceUpdateForm = ({
    order,
    initialData,
    user,
    handleTippingNumberChange,
    units,
}: Props) => {
    const navigate = useNavigate();
    const validationSchema = yup.object().shape({
        authorFunctionalNumber: yup
            .string()
            .trim()
            .required("Esse campo é obrigatório"),
        senderName: yup.string().trim().required("Esse campo é obrigatório"),
        senderFunctionalNumber: yup
            .string()
            .trim()
            .required("Esse campo é obrigatório"),
        date: yup
            .date()
            .required("Esse campo é obrigatório")
            .test("teste", "Data inválida", (value) => {
                if (value) {
                    const date = new Date(value);
                    if (date > new Date()) {
                        return false;
                    } else return true;
                } else return false;
            }),
        tippingNumber: yup.string().trim().required("Esse campo é obrigatório"),
        status: yup.string().trim(),
        destination: yup.string().trim().required("Esse campo é obrigatório"),
        productType: yup.string().trim(),
        description: yup.string().trim().max(250),
        receiverName: yup.string().trim(),
        receiverFunctionalNumber: yup.string().trim(),
        technicians: yup.string().trim(),
    });
    const formik = useFormik({
        initialValues: {
            tippingNumber: order.equipment.tippingNumber,
            status: order.equipment.status,
            productType: order.equipment.type,
            senderName: order.sender,
            senderFunctionalNumber: order.senderFunctionalNumber,
            date: order.date,
            userName: user.name,
            authorFunctionalNumber: "", // Propriedade faltando na O.S.
            receiverName: order.receiverName,
            receiverFunctionalNumber: "", // Propriedade faltando na O.S.
            orderStatus: "", // Propriedade faltando na O.S.
            destination: "", // Propriedade faltando na O.S.
            technicians: "", // Propriedade faltando na O.S.
            description: "", // Propriedade faltando na O.S.
        },
        validationSchema,
        enableReinitialize: true,
        onSubmit: async (values) => {
            try {
                await api.post(
                    `equipment/updateOrderService/${order.id}`,
                    {
                        equipmentId: formik.values.tippingNumber,
                        authorFunctionalNumber:
                            formik.values.authorFunctionalNumber,
                        destination: formik.values.destination,
                        senderName: formik.values.senderName,
                        senderFunctionalNumber:
                            formik.values.senderFunctionalNumber,
                        date: formik.values.date,
                        description: formik.values.description,
                        receiverName: formik.values.userName,
                        receiverFunctionalNumber:
                            formik.values.receiverFunctionalNumber,
                        status: formik.values.orderStatus,
                        technicians: formik.values.technicians
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    }
                );

                toast.success("Ordem de Serviço Atualizada.");
                navigate("/order-services");
            } catch (error) {
                console.log(`erro: ${error}`);
                toast.error("Error ao alterar O.S.");
            }
        },
    });

    return (
        <Container>
            <StyledCard>
                <StyledForm onSubmit={formik.handleSubmit}>
                    <FormContainer>
                        <StyledTextField
                            id="tippingNumber-input"
                            data-testid="tippingNumber-input"
                            label="N° Tombamento"
                            type="text"
                            name="tippingNumber"
                            variant="outlined"
                            fullWidth
                            onChange={(ev) => {
                                formik.setFieldValue(
                                    "tippingNumber",
                                    ev.target.value
                                );
                                handleTippingNumberChange(ev.target.value);
                            }}
                            value={formik.values.tippingNumber}
                            helperText={
                                formik.touched.tippingNumber &&
                                formik.errors.tippingNumber
                            }
                            error={
                                formik.touched.tippingNumber &&
                                Boolean(formik.errors.tippingNumber)
                            }
                        />
                        <FormControl>
                            <StyledInputLabel id="status-input-label">
                                Status da Ordem de Serviço
                            </StyledInputLabel>
                            <StyledSelect
                                id="status-input"
                                labelId="status-input-label"
                                data-testid="status-input-select"
                                label="Status do Equipamento"
                                type="text"
                                name="status"
                                variant="outlined"
                                error={
                                    formik.touched.status &&
                                    Boolean(formik.errors.status)
                                }
                                onChange={formik.handleChange}
                                value={formik.values.status}
                            >
                                <MenuItem value="ACTIVE">Ativo</MenuItem>
                                <MenuItem value="ACTIVE_LOAN">Ativo Empréstimo</MenuItem>
                                <MenuItem value="DOWNGRADED">Baixado</MenuItem>
                                <MenuItem value="MAINTENANCE">
                                    Em Manuntenção
                                </MenuItem>
                                <MenuItem value="TECHNICAL_RESERVE">Reserva Técnica</MenuItem>
                            </StyledSelect>
                        </FormControl>
                        <StyledTextField
                            InputLabelProps={{ shrink: true }}
                            id="productType-input"
                            label="Tipo de equipamento"
                            type="text"
                            fullWidth
                            name="productType"
                            variant="outlined"
                            aria-readonly
                            value={formik.values.productType}
                            helperText={
                                formik.touched.productType &&
                                formik.errors.productType
                            }
                            error={
                                formik.touched.productType &&
                                Boolean(formik.errors.productType)
                            }
                        />
                    </FormContainer>

                    <FormContainer>
                        <StyledTextField
                            id="senderName-select-label"
                            data-testid="senderName-select"
                            label="Nome do Entregador"
                            type="text"
                            name="senderName"
                            fullWidth
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.senderName}
                            helperText={
                                formik.touched.senderName &&
                                formik.errors.senderName
                            }
                            error={
                                formik.touched.senderName &&
                                Boolean(formik.errors.senderName)
                            }
                        />
                        <StyledTextField
                            aria-readonly
                            id="senderFunctionalNumber-input"
                            label="N° Funcional do Entregador"
                            type="text"
                            fullWidth
                            name="senderFunctionalNumber"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.senderFunctionalNumber}
                            helperText={
                                formik.touched.senderFunctionalNumber &&
                                formik.errors.senderFunctionalNumber
                            }
                            error={
                                formik.touched.senderFunctionalNumber &&
                                Boolean(formik.errors.senderFunctionalNumber)
                            }
                        />
                        <StyledTextField
                            InputLabelProps={{ shrink: true }}
                            id="data-input"
                            label="Data"
                            type="date"
                            name="date"
                            fullWidth
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.date}
                            helperText={
                                formik.touched.date && formik.errors.date
                            }
                            error={
                                formik.touched.date &&
                                Boolean(formik.errors.date)
                            }
                        />
                    </FormContainer>

                    <FormContainer>
                        <StyledTextField
                            aria-readonly
                            id="brand-input"
                            label="Nome do Recebedor"
                            type="text"
                            name="userName"
                            fullWidth
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                            helperText={
                                formik.touched.userName &&
                                formik.errors.userName
                            }
                            error={
                                formik.touched.userName &&
                                Boolean(formik.errors.userName)
                            }
                        />
                        <StyledTextField
                            aria-aria-readonly
                            label="N° Funcional do Recebedor"
                            type="text"
                            name="receiverFunctionalNumber"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.receiverFunctionalNumber}
                            helperText={
                                formik.touched.receiverFunctionalNumber &&
                                formik.errors.receiverFunctionalNumber
                            }
                            error={
                                formik.touched.receiverFunctionalNumber &&
                                Boolean(formik.errors.receiverFunctionalNumber)
                            }
                        />

                        <FormControl>
                            <StyledInputLabel id="orderStatus-select-label">
                                Status da Ordem de Serviço
                            </StyledInputLabel>
                            <StyledSelect
                                id="orderStatus-select-label"
                                labelId="orderStatus-select-label"
                                data-testid="orderStatus-select"
                                label="Status da O.S."
                                type="text"
                                name="orderStatus"
                                variant="outlined"
                                error={
                                    formik.touched.orderStatus &&
                                    Boolean(formik.errors.orderStatus)
                                }
                                onChange={formik.handleChange}
                                value={formik.values.orderStatus}
                            >
                                <MenuItem value="MAINTENANCE">
                                    Em Manuntenção
                                </MenuItem>
                                <MenuItem value="WARRANTY">Garantia</MenuItem>
                                <MenuItem value="CONCLUDED">Concluído</MenuItem>
                            </StyledSelect>
                        </FormControl>
                    </FormContainer>

                    <Autocomplete
                        disablePortal
                        options={units ?? []}
                        getOptionLabel={(option) =>
                            `${option.name} - ${option.localization}`
                        }
                        onChange={(_, value) =>
                            formik.setFieldValue("destination", value?.id)
                        }
                        fullWidth
                        className="autocomplete"
                        sx={{
                            padding: 0,
                            "& .MuiOutlinedInput-root": {
                                padding: "0 !important",
                            },
                            "& .MuiAutocomplete-input": {
                                padding: "16.5px !important",
                            },
                        }}
                        renderInput={(params) => (
                            <StyledTextField
                                {...params}
                                label="Destino"
                                helperText={
                                    formik.touched.destination &&
                                    formik.errors.destination
                                }
                                error={
                                    formik.touched.destination &&
                                    Boolean(formik.errors.destination)
                                }
                            />
                        )}
                    />

                    <StyledTextField
                        label="Técnicos"
                        aria-readonly
                        id="technicians-input"
                        type="text"
                        name="technicians"
                        fullWidth
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.technicians}
                        helperText={
                            formik.touched.technicians &&
                            formik.errors.technicians
                        }
                        error={
                            formik.touched.technicians &&
                            Boolean(formik.errors.technicians)
                        }
                    />

                    <StyledTextArea
                        label="Descrição"
                        data-testid="description-input"
                        name="description"
                        multiline
                        rows={2}
                        maxRows={4}
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        helperText={
                            formik.touched.description &&
                            formik.errors.description
                        }
                        error={
                            formik.touched.description &&
                            Boolean(formik.errors.description)
                        }
                    />

                    <ButtonContainer>
                        <Button
                            variant="contained"
                            styledColor={theme.palette.grey[100]}
                            textColor={theme.palette.grey[900]}
                            onClick={() => navigate("/order-services")}
                        >
                            Voltar
                        </Button>{" "}
                        <Button
                            variant="contained"
                            data-testid="register-button"
                            type="submit"
                            styledColor={theme.palette.primary.main}
                        >
                            Atualizar
                        </Button>
                    </ButtonContainer>
                </StyledForm>
            </StyledCard>
        </Container>
    );
};
export default OrderServiceUpdateForm;
