import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
		const {user_id} = request.params;
		const userAdmin = this.turnUserAdminUseCase.execute({user_id});
		console.log(userAdmin);
		return response.status(201).send();
  }
}

export { TurnUserAdminController };
