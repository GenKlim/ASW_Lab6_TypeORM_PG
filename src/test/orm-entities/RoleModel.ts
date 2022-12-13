import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./UserModel"
import { RolesPermissions } from "./RolesPermissionsModel"

@Entity({ name: "Roles" })
export class Role {
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
  
  @OneToMany(() => User, (user) => user.role)
    users: User[]
  
  @OneToMany(() => RolesPermissions, (roles_permissions) => roles_permissions.role)
    roles_permissions: RolesPermissions[]
}