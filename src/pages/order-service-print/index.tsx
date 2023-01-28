/* eslint-disable no-unused-vars */
import { CircularProgress, Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";
import {
    Params,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import api from "../../api/config";
import RegisterOrderServiceForm from "../../components/register-order-service-form";
import { AuthContext } from "../../contexts/auth";
import { Container } from "../user-register/styles";

export type Equipment = {
    id: string;
    tippingNumber: string;
    serialNumber: string;
    type: string;
    status: string;
    model: string;
    description: string;
    initialUseDate: string;
    screenSize: string;
    invoiceNumber: string;
    power?: string;
    screenType?: string;
    processor: string;
    storageType: string;
    storageAmount: string;
    ram_size: string;
    createdAt: string;
    updatedAt: string;
    formattedStatus: string;
};

const OrderPrint  = () => {
    const navigate = useNavigate()
    const [equipment, setEquipment] = useState<Equipment | undefined>(undefined)
    const [units, setUnits] = useState<
      { id: string; name: string; localization: string }[] | undefined
    >(undefined)
  
    const fetchUnits = async () => {
      const {
        data
      }: AxiosResponse<{ id: string; name: string; localization: string }[]> =
        await api.get(`equipment/getAllUnits`)
      setUnits(data)
    }
  
    useEffect(() => {
      fetchUnits()
    }, [])
}
export default OrderPrint;
