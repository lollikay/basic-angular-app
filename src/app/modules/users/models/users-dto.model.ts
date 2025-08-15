import { PaginatedResponseBase } from "src/app/shared/models/paginated-response.model";
import { User } from "./user.model";

export interface PaginatedUsersResponse extends PaginatedResponseBase {
  users: User[];
}
