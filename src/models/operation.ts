export interface OperationI {
    id: number;
    lblOperation: string;
    idStatus: number | null;
    status: string;
    bgColorStatus: string;
    date: string;
    isDoneYearOne: boolean | null;
    isDoneYearTwo: boolean | null;
    isDoneYearThree: boolean | null;
}