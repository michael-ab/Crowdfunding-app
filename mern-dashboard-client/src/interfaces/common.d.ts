export interface CustomButtonProps {
    type?: string;
    title: string;
    backgroundColor: string;
    color: string;
    fullWidth?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
    handleClick?: () => void;
}

export interface ProfileProps {
    type: string;
    name: string;
    avatar: string;
    email: string;
    properties: Array | undefined;
}

export interface PropertyProps {
    _id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    platform: string;
    description: string;
    location: string;
    investedAmount: string;
    photo: string;
    creator: string;
}

export interface FormProps {
    type: string;
    register: any;
    onFinish: (
        values: FieldValues,
    ) => Promise<
        void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>
    >;
    formLoading: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
    onFinishHandler: (data: FieldValues) => Promise<void> | void;
}
