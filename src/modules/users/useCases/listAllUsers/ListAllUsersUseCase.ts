import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

// Retorna todos os usuários caso o usuário solicitado seja admin
class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
		const user = this.usersRepository.findById(user_id);
		if(!user){
			throw new Error(`User [${user_id}]not found.`);
		}
		if(!user.admin){
			throw new Error(`User [${user_id}] is not a admin.`)
		}
		return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
