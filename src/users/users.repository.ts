/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { UsersEntity } from "./users.entity";

@Injectable()
export class UsersRepository {
    private users: UsersEntity[] = [];

    async save(users: UsersEntity) {
        this.users.push(users);
    }

    async list() {
        return this.users;
    }

    async existsUsersWithThisEmail(email: string) {
        const possibleUser = this.users.find(
            users => users.email === email
        );

        return possibleUser !== undefined;
    }

    private searchForID(id: string) {
        const possibleUser = this.users.find(
            savedUsers => savedUsers.id === id
        );

        if (!possibleUser) {
            throw new Error('Users dont exist')
        }

        return possibleUser;
    }

    async update(id: string, updateData: Partial<UsersEntity>) {

        const users = this.searchForID(id)

        Object.entries(updateData).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }
            users[key] = value;
        })
        return users;
    }

    async delete(id: string) {
        const users = this.searchForID(id);
        this.users = this.users.filter(
            userSaved => userSaved.id !== id
        );
        return users;
    }
}