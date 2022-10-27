import { ApiError } from "./apierror.model";

export interface ApiResponse<T> {
    data:T | null,
    error:ApiError | null
}