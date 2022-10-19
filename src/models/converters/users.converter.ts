import UsersInput from "../dto/input/users.input";
import UsersOutput from "../dto/output/users.output";
import UserEntity from "../entities/user.entity";

export default class UsersConverter {

    inputToNewEntity(input: UsersInput, entity: UserEntity) {

        const output = new UsersOutput();

        output.id = entity.id;
        output.name = entity.name;
        output.active = entity.active;
        output.createdAt = new Date();
        output.updatedAt = new Date();
    }

    entityToOutput(entity: UserEntity): UsersOutput{

        const output = new UsersOutput();

        output.id = entity.id;
        output.name = entity.name;
        output.active = entity.active;
        output.createdAt = entity.createdAt;
        output.updatedAt = entity.updateAt;

        return output;
    }
}