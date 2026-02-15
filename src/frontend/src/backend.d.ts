import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ChangeRequest {
    submittedTime: Time;
    content: string;
    submittedBy: Principal;
    reviewed: boolean;
    accepted: boolean;
}
export type Time = bigint;
export interface ChangeRequestInput {
    content: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAll(): Promise<Array<ChangeRequest>>;
    getCallerUserRole(): Promise<UserRole>;
    isCallerAdmin(): Promise<boolean>;
    markReviewed(id: bigint, accepted: boolean): Promise<void>;
    submitChangeRequest(input: ChangeRequestInput): Promise<void>;
}
