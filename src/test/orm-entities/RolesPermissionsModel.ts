import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Role } from "./RoleModel"
import { Permission } from "./PermissionModel"

@Entity({ name: "Roles_Permissions" })
export class RolesPermissions {
  @Column({
    type: "uuid",
    primary: true
  })
  ID: string;
  
  @Column({
    type: "uuid"
  })
  RoleID: string;
  
  @Column({
    type: "uuid"
  })
  PermissionID: string;
  
  @ManyToOne(() => Role, (role) => role.roles_permissions)
  @JoinColumn({ name: "RoleID" })
    role: Role
  
  @ManyToOne(() => Permission, (permission) => permission.roles_permissions)
  @JoinColumn({ name: "PermissionID" })
    permission: Permission
}