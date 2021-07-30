import Joi from "joi";

export const examSchema = Joi.object({
  name: Joi.string().min(6).max(6).trim().required(),
  categoryId: Joi.number().integer().required(),
  courseId: Joi.number().integer().required(),
  professorId: Joi.number().integer().required(),
  examUrl: Joi.string().uri().trim().required(),
});
