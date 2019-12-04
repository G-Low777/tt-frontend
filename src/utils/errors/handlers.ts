import { TErrorHandlers } from "./types";

const handlers: TErrorHandlers = {
	unknown_error: {
		code: "unknown_error",
		title: "Неизвестная ошибка",
		message: "Произошла неизвестная ошибка",
		description: "Произошла неизвестная ошибка.",
	},
	network_error: {
		code: "network_error",
		title: "Ошибка сети",
		message: "Произошла ошибка сети",
		description: "Произошла ошибка сети. Проверьте интернет-соединение и повторите попытку.",
	},
	invalid_credentials: {
		code: "invalid_credentials",
		title: "Ошибка входа",
		message: "Неправильные логин и/или пароль",
		description:
			"Указанные логин и пароль не принадлежат ни одному пользователю. Проверьте введённые" +
			" логин и пароль и повторите попытку.",
	},
};

export default handlers;
