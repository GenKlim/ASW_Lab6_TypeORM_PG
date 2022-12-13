import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RolesPermissions } from "./RolesPermissionsModel"

@Entity({ name: "Permissions" })
export class Permission {
  @Column({
    type: "uuid",
    primary: true
  })
  ID: string;
  
  @Column({
    type: "varchar",
    length: 128
  })
  Name: string;
  
  @OneToMany(() => RolesPermissions, (roles_permissions) => roles_permissions.permission)
    roles_permissions: RolesPermissions[]
}