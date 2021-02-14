import { Table, Column, Datatype } from "./../index";

export interface UserFields {
  id: number;
  first_name: string;
  is_bot: boolean;
  last_name: string;
  username: string;
}

export class UserTable extends Table {

  constructor() {
    let columns:Column[] = [
      {
        name: "id",
        type: Datatype.int,
        isPrimary: true
      },
      {
        name: "first_name",
        type: Datatype.varchar(64)
      },
      {
        name: "is_bot",
        type: Datatype.tinyint
      },
      {
        name: "last_name",
        type: Datatype.varchar(64),
        isNull: true
      },
      {
        name: "username",
        type: Datatype.varchar(64),
        isNull: true
      }
    ];
    super("user", columns);
  }
}

export const userTable = new UserTable();