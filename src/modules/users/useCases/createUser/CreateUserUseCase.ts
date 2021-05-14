import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
		const userAlreadyExists = this.usersRepository.findByEmail(email);
		if(userAlreadyExists){
			throw new Error(`This email (${email}) is already in use.`)
		}
		const user = this.usersRepository.create({email, name});
		console.log(user);
		return user;
  }
}

export { CreateUserUseCase };
