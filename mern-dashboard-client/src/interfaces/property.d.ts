import { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
    title: string;
    labelName: string;
}

export interface FormValues {
    title: string;
    platform: string
    description: string;
    propertyType: string;
    location: string;
    investedAmount: number | undefined;
}

export interface PropertyCardProps {
    id?: BaseKey | undefined;
    title: string;
    platform: string;
    location: string;
    investedAmount: string;
    photo: string;
}
