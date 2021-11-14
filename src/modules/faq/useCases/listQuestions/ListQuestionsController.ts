import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListQuestionsUseCase } from "./ListQuestionsUseCase";

class ListQuestionsController {
  async handle(request: Request, response: Response) {
    const listQuestionsUseCase = container.resolve(ListQuestionsUseCase);

    const allQuestions = await listQuestionsUseCase.execute();

    return response.json(allQuestions);
  }
}

export { ListQuestionsController };
